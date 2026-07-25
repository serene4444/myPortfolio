export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  icon: string
}

export type SkillItem = {
  name: string
  level: number
}

export type SkillCategory = {
  title: string
  icon: string
  items: SkillItem[]
}

export type ExperienceItem = {
  period: string
  role: string
  organization: string
  logo: string
  description: string
  bullets: string[]
}

export type ProjectItem = {
  title: string
  description: string
  image: string
  imageAlt: string
  tech: string[]
  href: string
}

export type ContactItem = {
  label: string
  value: string
  href: string
  icon: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sereneplummer/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/serene4444', icon: 'github' },
  { label: 'Coursera', href: 'https://www.coursera.org/learner/sereneplummer', icon: 'graduation' }
]

export const heroStats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Certifications', value: '13+' },
  { label: 'Years Experience', value: '3+' }
]

export const aboutParagraphs = [
  'I’m Serene, an early-career software engineer with a background in Python, SQL, and machine learning. I love taking on complex problems, exploring data, and building predictive models that lead to smarter decisions. Along the way, I’ve gained hands-on experience in data visualization, ETL pipelines, and full-stack development, which gives me a well-rounded approach to solving data challenges.',
  'Originally from Seattle, the outdoors has always felt like home to me. Whether I’m hiking mountain trails, snowboarding fresh powder, or traveling to breathtaking places like Colorado or upstate New York, I find my energy in nature and the adventure of new landscapes.',
  'I’m always learning through certifications, projects, and real-world applications, and I’m driven by the idea of using data science to make a real impact while continuing to grow both professionally and personally.'
]

export const skillMarquee = [
  'Python', 'JavaScript', 'SQL', 'HTML/CSS', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'Matplotlib', 'Plotly', 'Tableau', 'Git', 'GitHub', 'VS Code', 'Excel', 'Figma', 'React', 'MongoDB', 'MySQL', 'Machine Learning', 'Data Analysis', 'Data Visualization'
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'code',
    items: [
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'JavaScript', level: 65 }
    ]
  },
  {
    title: 'Data Science & ML',
    icon: 'brain',
    items: [
      { name: 'Pandas & NumPy', level: 90 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Matplotlib/Seaborn', level: 85 },
      { name: 'TensorFlow', level: 60 },
      { name: 'Requests', level: 75 }
    ]
  },
  {
    title: 'Tools & Frameworks',
    icon: 'tools',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Dash & FastAPI', level: 70 },
      { name: 'Docker', level: 55 },
      { name: 'ETL Processes', level: 75 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: 'users',
    items: [
      { name: 'Communication', level: 90 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Team Collaboration', level: 80 },
      { name: 'Critical Thinking', level: 85 },
      { name: 'Adaptability', level: 80 }
    ]
  }
]

export const experiences: ExperienceItem[] = [
  {
    period: 'Summer 2026',
    role: 'Software Engineering Internship',
    organization: 'Fidelity',
    logo: '/assets/fidelity.png',
    description: 'Joining Fidelity as a Software Engineering Intern to contribute to production-quality software and data-driven features. I’ll collaborate with cross-functional teams to implement reliable services, integrate data pipelines and models, and deliver clean, testable code that supports business objectives.',
    bullets: ['Additional details coming soon.']
  },
  {
    period: 'Spring 2026',
    role: 'Data & Insights Internship',
    organization: 'CommonPoint',
    logo: '/assets/commonpoint.webp',
    description: '',
    bullets: ['Additional details coming soon.']
  },
  {
    period: 'Aug 2025 - Present',
    role: 'STEM Instructor',
    organization: 'iCode',
    logo: '/assets/icode-logo.png',
    description: 'Teaching and mentoring students in Science, Technology, Engineering, and Mathematics (STEM) concepts. Delivering engaging lessons using provided curriculum to help students build their technical skills, critical thinking, and problem-solving abilities.',
    bullets: [
      'Instruct students in various STEM subjects including programming, robotics, and mathematics',
      'Adapt teaching methods to meet diverse student learning needs',
      'Mentor students in project-based learning and hands-on STEM activities',
      'Guide students through structured STEM curriculum and activities'
    ]
  }
]

export const projects: ProjectItem[] = [
  {
    title: 'AAPL Stock Price Prediction',
    description: 'Machine learning model to predict stock prices using historical data and technical indicators. Implemented using Python, Pandas, and Scikit-learn.',
    image: '/assets/stock.jpg',
    imageAlt: 'Stock Price Prediction',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    href: 'https://github.com/serene4444/Prediciting-Stock-Prices'
  },
  {
    title: 'California Housing Price Prediction',
    description: 'A machine learning project that predicts California housing prices using NumPy and Pandas. Built in Jupyter Notebook, it demonstrates data cleaning, feature exploration, and linear regression for cost prediction.',
    image: '/assets/house.png',
    imageAlt: 'California Housing Price Prediction',
    tech: ['Python', 'Jupyter', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    href: 'https://github.com/serene4444/Python-Project-for-Data-Science'
  },
  {
    title: 'COVID-19 Data Analysis',
    description: 'Exploratory data analysis of COVID-19 trends and patterns using Python. Features interactive visualizations and statistical insights.',
    image: '/assets/covid.jpg',
    imageAlt: 'COVID-19 Data Analysis',
    tech: ['Python', 'Pandas', 'Plotly', 'Statistics'],
    href: 'https://github.com/serene4444/COVID19-Data-Analysis-Using-Python'
  },
  {
    title: 'GenAI Chatbots Project',
    description: 'Development of AI-powered chatbots using generative AI technologies. Explores natural language processing and conversational AI.',
    image: '/assets/chatbot.webp',
    imageAlt: 'GenAI Chatbots Project',
    tech: ['Python', 'NLP', 'AI/ML', 'APIs', 'OpenAI', 'LLM Applications'],
    href: 'https://github.com/serene4444/GenAI-Chatbots-Project'
  },
  {
    title: 'Applied Data Science Capstone: Predicting Falcon 9 Landings',
    description: 'Final IBM Data Science Professional Certificate project. Built predictive models, visual analytics, and interactive dashboards to determine whether SpaceX Falcon 9 first stages will land successfully.',
    image: '/assets/falconn9.png',
    imageAlt: 'Applied Data Science Capstone',
    tech: ['Python', 'Machine Learning', 'Data Visualization', 'Model Deployment'],
    href: 'https://github.com/serene4444/Data-Science-Capstone/blob/main/README.md'
  },
  {
    title: 'Medical Appointment Booking',
    description: 'A web application that allows users to schedule and manage medical appointments efficiently, featuring form validation, dynamic routing, and a responsive interface.',
    image: '/assets/medical-appointment-system.jpg',
    imageAlt: 'Medical Appointment Booking',
    tech: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    href: 'https://github.com/serene4444/Medical-Appointment-Booking/tree/gh-pages'
  }
]

export const contactItems: ContactItem[] = [
  { label: 'Email', value: 'sereneplmr@gmail.com', href: 'mailto:sereneplmr@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sereneplummer', href: 'https://linkedin.com/in/sereneplummer', icon: 'linkedin' },
  { label: 'GitHub', value: 'github.com/serene4444', href: 'https://github.com/serene4444', icon: 'github' }
]
