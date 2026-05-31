import { NextResponse } from 'next/server';

type DifficultyResult = {
  nlp: number;
  irt: number;
  graph: number;
  final: number;
  summary: string;
  recommendation: string;
};

type OpenAIResponse = {
  output_text?: string;
  output?: Array<{
    content?: Array<{
      text?: string;
      type?: string;
    }>;
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

function extractText(payload: OpenAIResponse) {
  if (payload.output_text) return payload.output_text;

  return (
    payload.output
      ?.flatMap((item) => item.content ?? [])
      .map((content) => content.text)
      .filter(Boolean)
      .join('\n') ?? ''
  );
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
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4.1-mini';

  if (!apiKey) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY is not configured on the server.' },
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

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      instructions:
        'You are an educational measurement assistant. Score learning concept difficulty for curriculum sequencing. Return only compact JSON.',
      input: `Analyze this learning concept.

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
      max_output_tokens: 320,
    }),
  });

  const payload = (await response.json().catch(() => ({}))) as OpenAIResponse;

  if (!response.ok) {
    return NextResponse.json(
      { error: payload.error?.message || 'OpenAI request failed.' },
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
