import { NextResponse } from 'next/server';

type DifficultyResult = {
  nlp: number;
  irt: number;
  graph: number;
  final: number;
  summary: string;
  recommendation: string;
};

type GroqResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
};

function clampScore(value: unknown) {
  const score = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(score)) return 0;
  return Math.max(0, Math.min(10, Number(score.toFixed(1))));
}

function extractText(payload: GroqResponse) {
  return payload.choices?.map((choice) => choice.message?.content).filter(Boolean).join('\n') ?? '';
}

function parseResult(text: string): DifficultyResult {
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('AI response did not contain JSON.');
  }

  const parsed = JSON.parse(jsonMatch[0]) as Partial<DifficultyResult>;
  const result = {
    nlp: clampScore(parsed.nlp),
    irt: clampScore(parsed.irt),
    graph: clampScore(parsed.graph),
    final: clampScore(parsed.final),
    summary: String(parsed.summary ?? '').slice(0, 240),
    recommendation: String(parsed.recommendation ?? '').slice(0, 240),
  };

  if (!result.summary || !result.recommendation) {
    throw new Error('AI response missed required fields.');
  }

  return result;
}

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';
  const baseUrl = process.env.GROQ_BASE_URL || 'https://api.groq.com/openai/v1';
  const maxCompletionTokens = Number(process.env.GROQ_MAX_COMPLETION_TOKENS || 320);

  if (!apiKey) {
    return NextResponse.json(
      { error: 'GROQ_API_KEY is not configured on the server.' },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as
    | { conceptName?: string; description?: string }
    | null;
  const conceptName = body?.conceptName?.trim() ?? '';
  const description = body?.description?.trim() ?? '';

  if (!conceptName || description.length < 20) {
    return NextResponse.json(
      { error: 'Provide a concept name and a description of at least 20 characters.' },
      { status: 400 },
    );
  }

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'system',
          content:
            'You are an educational measurement assistant. Score learning concept difficulty for curriculum sequencing. Return only compact JSON.',
        },
        {
          role: 'user',
          content: `Analyze this learning concept.

Concept: ${conceptName}
Description: ${description}

Return JSON with exactly these fields:
{
  "nlp": number from 0 to 10,
  "irt": number from 0 to 10,
  "graph": number from 0 to 10,
  "final": number from 0 to 10,
  "summary": "one short sentence explaining the difficulty",
  "recommendation": "one short sequencing recommendation"
}`,
        },
      ],
      response_format: { type: 'json_object' },
      max_completion_tokens: Number.isFinite(maxCompletionTokens) ? maxCompletionTokens : 320,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as GroqResponse;

  if (!response.ok) {
    return NextResponse.json(
      { error: payload.error?.message || 'Groq request failed.' },
      { status: response.status },
    );
  }

  try {
    return NextResponse.json(parseResult(extractText(payload)));
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Could not parse AI response.' },
      { status: 502 },
    );
  }
}
