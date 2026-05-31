# Concept Difficulty Predictor (CDP)

A modern, AI-powered educational technology website showcasing the Concept Difficulty Predictor system. CDP uses multi-signal machine learning to predict learning concept difficulty and enable adaptive curriculum sequencing.

## 🎯 Project Overview

The Concept Difficulty Predictor (CDP) is an AI-powered educational technology system that predicts the difficulty level of learning concepts using three complementary signals:

1. **NLP-Based Content Complexity Analysis** - Analyzes course materials for readability, vocabulary complexity, and concept density
2. **Item Response Theory (IRT) Learner Performance Analysis** - Models learner abilities based on assessment performance
3. **Knowledge Graph Prerequisite Depth Analysis** - Maps concept dependencies and prerequisite relationships

The system combines these signals through an ensemble machine learning model to generate difficulty scores (0-10) and automatically sequence curriculum content for adaptive learning.

## 🚀 Features

- **Beautiful Hero Section** - Animated AI-themed banner with gradient backgrounds and floating nodes
- **Interactive Architecture Diagram** - Visual representation of the analysis pipeline
- **Core Modules Display** - Detailed cards for each analysis component
- **Interactive Demo** - Test the concept analyzer with custom inputs
- **Performance Metrics** - Real-time statistics and achievement counters
- **Responsive Design** - Mobile-first, fully responsive on all devices
- **Dark/Light Mode** - Complete theme toggle support
- **Smooth Animations** - Framer Motion powered interactions
- **Modern UI Components** - Tailwind CSS with glassmorphism effects
- **TypeScript** - Full type safety throughout

## 📋 Tech Stack

**Frontend:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons
- Next Themes

**Features:**
- Server-side rendering
- Optimized for performance
- SEO friendly
- Dark mode support
- Responsive design

## 📁 Project Structure

```
sharath/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   └── providers.tsx       # Theme provider setup
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero banner
│   ├── AboutSection.tsx    # Project overview
│   ├── ArchitectureSection.tsx # System architecture
│   ├── ModulesSection.tsx  # Core modules
│   ├── TechStackSection.tsx # Technology stack
│   ├── DemoSection.tsx     # Interactive demo
│   ├── ResultsSection.tsx  # Performance metrics
│   ├── ApplicationsSection.tsx # Use cases
│   ├── FutureSection.tsx   # Roadmap
│   ├── TeamSection.tsx     # Team information
│   ├── ContactSection.tsx  # Contact form
│   ├── Footer.tsx          # Footer
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── Section.tsx         # Reusable section components
│   └── index.ts            # Component exports
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

3. **Build for production:**
```bash
npm run build
npm run start
```

## 📱 Pages & Sections

1. **Hero Section** - Main banner with CTA buttons
2. **About Project** - Problem statement and solution overview
3. **System Architecture** - Interactive pipeline visualization
4. **Core Modules** - NLP, IRT, and Knowledge Graph analysis
5. **Technology Stack** - Frontend, Backend, NLP, and Graph technologies
6. **Interactive Demo** - Concept analyzer with real-time results
7. **Results & Performance** - Key metrics and achievements
8. **Applications** - Use cases across education sector
9. **Future Scope** - Development roadmap
10. **Team** - Presenter and guide information
11. **Contact** - Contact form and social links
12. **Footer** - Quick links and copyright

## 🎨 Design Features

- **Glassmorphism Effects** - Modern frosted glass UI elements
- **Gradient Backgrounds** - Beautiful blue-purple-pink gradients
- **Animated Counters** - Performance metrics with smooth counting animation
- **Floating Elements** - Smooth floating animations throughout
- **Responsive Typography** - Scales perfectly on all devices
- **Custom Scrollbar** - Styled scrollbar with gradient
- **Dark Mode** - Full dark theme support with smooth transitions
- **Interactive Hover States** - Engaging interactive elements

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom utilities:
- Custom animations (float, glow, pulse-slow)
- Glass-effect utility
- Gradient text utility
- Responsive breakpoints

### Theme Toggle
Theme preferences are managed by `next-themes` and persisted in localStorage.

## 📊 Performance

- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized images and lazy loading
- **Mobile Friendly** - Responsive design on all screen sizes
- **Accessibility** - ARIA labels and semantic markup
- **PWA Ready** - Can be extended with service workers

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
vercel deploy
```

### Other Platforms
```bash
npm run build
# The build folder is ready to be deployed
```

## 📝 Customization

### Update Team Information
Edit `components/TeamSection.tsx` to update:
- Presenter name and details
- Guide/mentor information
- Contact information

### Modify Statistics
Edit `components/ResultsSection.tsx` to update performance metrics and achievements.

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme throughout the application.

### Add Contact Information
Edit `components/ContactSection.tsx` to update:
- Email address
- Phone number
- Location
- Social media links

## 🔐 Environment Variables

The AI difficulty analyzer uses Groq from a server-only API route. Add these values to `.env.local`:

```
GROQ_API_KEY=your-groq-api-key
GROQ_MODEL=openai/gpt-oss-120b
GROQ_BASE_URL=https://api.groq.com/openai/v1
GROQ_MAX_COMPLETION_TOKENS=320
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 📄 License

This project is part of an academic research initiative. All rights reserved.

## 👤 Authors

**Kaparthi Sharath Kumar**
- Roll Number: 24U11A0591
- Branch: Computer Science and Engineering (CSE)

**Guide: Ms. P. Ramya Krishna**
- Assistant Professor, Department of CSE

## 🙏 Acknowledgments

Special thanks to all faculty members, peers, and the educational community for their support throughout this project.

## 📞 Contact

For questions, feedback, or collaboration opportunities, please reach out through the contact form on the website or at `sharath.research@university.edu`.

---

Made with ❤️ for Education through AI-Driven Curriculum Intelligence
