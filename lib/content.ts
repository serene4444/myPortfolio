export type SocialLink = {
  label: string
  href: string
  icon: 'mail' | 'linkedin' | 'github' | 'download'
}

export type CurrentlyItem = {
  label: string
  value: string
  accent: 'orange' | 'lavender'
  tilt: string
}

export type ExperienceItem = {
  id: string
  period: string
  role: string
  organization: string
  location: string
  bullets: string[]
}

export type SketchKind = 'traj' | 'bars' | 'orbits'

export type FeatureProject = {
  num: string
  kicker: string
  title: string
  meta: string
  plateTitle: string
  plateNote: string
  body: string
  tech: string[]
  href: string
  cta: string
  tilt: string
  plate: string
  plateInk: string
  sketch: SketchKind
}

export type OlderProject = {
  title: string
  category: 'AI & ML' | 'Data Science' | 'Web'
  description: string
  href: string
  tilt: string
}

export const resumeHref = '/myPortfolio/Serene-Plummer-Resume.pdf'

export const heroFacts = [
  { key: 'role', value: 'software engineer' },
  { key: 'focus', value: 'AI agents · RAG · MCP' },
  { key: 'cloud', value: 'AWS · terraform' },
  { key: 'edu', value: "UNT CS '28 · 4.0" },
  { key: 'base', value: 'Dallas → Chicago' },
  { key: 'open', value: 'summer 2027' }
]

export const currentlyItems: CurrentlyItem[] = [
  { label: 'Building', value: 'Stellar Genesis — planet evolution loop, v2', accent: 'orange', tilt: '-1.6deg' },
  { label: 'Somewhere', value: 'Katy Trail, and a great many gym sessions', accent: 'lavender', tilt: '1.2deg' },
  { label: 'Open to', value: 'Summer 2027 internships', accent: 'orange', tilt: '-.8deg' }
]

export const experiences: ExperienceItem[] = [
  {
    id: 'nb-idx',
    period: 'Fall 2026 — present',
    role: 'AWS Cloud Engineer',
    organization: 'IDX Exchange',
    location: 'Boise, ID',
    bullets: [
      'Architected production AWS across EC2, S3, RDS, DynamoDB, VPC, Lambda, API Gateway and ECS Fargate with least-privilege IAM, load balancing and auto-scaling.',
      'Automated infrastructure and deploys with Terraform and GitHub Actions — keyless AWS auth, secrets management, monitoring.',
      'Cost optimization, data governance and disaster-recovery strategy cut manual infrastructure work.'
    ]
  },
  {
    id: 'nb-fid',
    period: 'Summer 2026',
    role: 'Software Engineer Intern',
    organization: 'Fidelity Investments',
    location: 'Westlake, TX',
    bullets: [
      'Engineered AI agents with RAG, MCP integrations and prompt engineering to automate code quality and testing — contributing to a 60% reduction in deployment cycles.',
      'Built Java and Spring Boot test automation against Oracle and MySQL, catching defects earlier and cutting manual QA.',
      'Partnered with engineers and stakeholders across Git, Jira and CI/CD to improve release reliability.'
    ]
  },
  {
    id: 'nb-cp',
    period: 'Spring 2026',
    role: 'Data Analytics Intern',
    organization: 'Common Point',
    location: 'New York, NY',
    bullets: [
      'Architected automated analysis workflows with AI tooling and Google Cloud to streamline organizational research.',
      'Built frameworks synthesizing qualitative and quantitative data through advanced categorization to surface trends.',
      'Cleaned, structured and audited high-fidelity datasets; visualized findings in Tableau.'
    ]
  },
  {
    id: 'nb-ic',
    period: 'Fall 2025 — present',
    role: 'STEM & Coding Instructor',
    organization: 'iCode School',
    location: 'McKinney, TX',
    bullets: [
      'Mentored students to a 35% improvement in problem-solving across STEM and robotics projects.',
      'Designed interactive lessons in Scratch, robotics, AI concepts, digital logic and prompt engineering.',
      'Raised engagement scores 40% by making hard technical ideas age-appropriate.'
    ]
  }
]

export const featureProjects: FeatureProject[] = [
  {
    num: '01',
    kicker: 'Classifier study',
    title: 'SpaceX Mission Success Predictor',
    meta: 'Summer 2025',
    plateTitle: 'FALCON 9 LANDING OUTCOMES',
    plateNote: '95% accurate, 2,500+ records',
    body: 'End-to-end pipeline — scraping, wrangling, feature engineering, EDA — then SVM, Decision Tree and k-NN compared in Python to predict Falcon 9 first-stage landings. Optimized preprocessing accelerated analysis by 60%.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    href: 'https://github.com/serene4444/Data-Science-Capstone/blob/main/README.md',
    cta: 'Read the write-up',
    tilt: '-.5deg',
    plate: '#112a52',
    plateInk: '#dce9ff',
    sketch: 'traj'
  },
  {
    num: '02',
    kicker: 'Full-stack AI',
    title: 'Real-Time Sentiment Analytics Platform',
    meta: 'Flask + Watson NLP · Spring 2026',
    plateTitle: 'EMOTION SPECTRUM',
    plateNote: 'POST /analyze → 0.94 positive',
    body: 'A Python/Flask backend exposing REST APIs for NLP inference, wired to a responsive interface for real-time sentiment and emotion analysis on unstructured text. Modular pipelines separate preprocessing, inference and structured output.',
    tech: ['Python', 'Flask', 'NLP', 'REST APIs'],
    href: 'https://github.com/serene4444/Emotion-Detector-AI',
    cta: 'View the code',
    tilt: '.4deg',
    plate: '#3d1f28',
    plateInk: '#ffe2e2',
    sketch: 'bars'
  },
  {
    num: '03',
    kicker: 'Idle simulation',
    title: 'Stellar Genesis',
    meta: 'React · TypeScript · Zustand · Fall 2026 — present',
    plateTitle: 'SOLAR SYSTEM GENESIS',
    plateNote: 'concept to build in two days',
    body: 'A cinematic space clicker: players generate resources, evolve planets, research technologies and automate production across a growing solar system. Modular state, a custom game loop, persistent saves and data-driven progression.',
    tech: ['React', 'TypeScript', 'Vite', 'Zustand'],
    href: 'https://github.com/serene4444/Space-Clicker-Game-Design',
    cta: 'Play the game',
    tilt: '-.3deg',
    plate: '#1b2145',
    plateInk: '#e3e6ff',
    sketch: 'orbits'
  }
]

export const olderProjectFilters = ['All', 'AI & ML', 'Data Science', 'Web'] as const

export const olderProjects: OlderProject[] = [
  {
    title: 'AAPL Stock Price Prediction',
    category: 'AI & ML',
    description: 'ML model predicting stock prices from historical data and technical indicators.',
    href: 'https://github.com/serene4444/Prediciting-Stock-Prices',
    tilt: '-.6deg'
  },
  {
    title: 'California Housing Prices',
    category: 'AI & ML',
    description: 'Linear regression in Jupyter — cleaning, feature exploration, cost prediction.',
    href: 'https://github.com/serene4444/Python-Project-for-Data-Science',
    tilt: '.5deg'
  },
  {
    title: 'COVID-19 Data Analysis',
    category: 'Data Science',
    description: 'Exploratory analysis of trends with interactive visualizations and statistics.',
    href: 'https://github.com/serene4444/COVID19-Data-Analysis-Using-Python',
    tilt: '-.4deg'
  },
  {
    title: 'GenAI Chatbots',
    category: 'AI & ML',
    description: 'OpenAI-powered chatbots exploring NLP and conversational AI, deployed end to end.',
    href: 'https://github.com/serene4444/GenAI-Chatbots-Project',
    tilt: '.6deg'
  },
  {
    title: 'Medical Appointment Booking',
    category: 'Web',
    description: 'Scheduling app with validation, dynamic routing and a responsive interface.',
    href: 'https://github.com/serene4444/Medical-Appointment-Booking/tree/gh-pages',
    tilt: '-.5deg'
  },
  {
    title: 'Portfolio Site',
    category: 'Web',
    description: 'Statically exported Next.js portfolio deployed on GitHub Pages.',
    href: 'https://github.com/serene4444/myPortfolio',
    tilt: '.4deg'
  }
]

export const aboutParagraph =
  "Originally from Seattle, the outdoors has always felt like home to me. Whether I'm hiking mountain trails, snowboarding fresh powder, or traveling to breathtaking places like Colorado or upstate New York, I find my energy in nature and the adventure of new landscapes."

export const aboutFacts: { label: string; value: string; accent?: boolean }[] = [
  { label: 'Raised', value: 'Seattle, WA' },
  { label: 'Based', value: 'Dallas, TX' },
  { label: 'Next', value: 'Chicago, IL', accent: true }
]

export const socials: SocialLink[] = [
  { label: 'Email', href: 'mailto:sereneplmr@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/serenep', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/serene4444', icon: 'github' },
  { label: 'Résumé PDF', href: resumeHref, icon: 'download' }
]
