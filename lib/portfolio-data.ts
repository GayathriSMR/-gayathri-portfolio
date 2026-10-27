import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BadgeCheck,
  BarChart3,
  Brain,
  Code2,
  Database,
  FileSpreadsheet,
  Presentation,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react'

// Replace these placeholder links with your real profiles.
export const profile = {
  name: 'Gayathri S',
  role: 'Data Analyst',
  headline: 'Data Analyst | AI & Machine Learning Enthusiast',
  intro:
    'I turn data into meaningful insights and build intelligent solutions using analytics, machine learning, and AI.',
  education: {
    degree: 'B.E. Computer Science and Engineering',
    graduation: '2027',
    cgpa: '8.79',
  },
  email: 'gayathrism333@gmail.com',
  links: {
    github: 'https://github.com/GayathriSMR',
    linkedin: 'https://www.linkedin.com/in/gayathri-sm333',
  },
  resumeUrl: '/Gayathri_SM_Resume.pdf',
  siteUrl: 'https://gayathri-s.vercel.app',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { label: 'CGPA', value: profile.education.cgpa },
  { label: 'Graduating', value: profile.education.graduation },
  { label: 'Internship', value: 'Data Science' },
]

export const about = {
  paragraphs: [
    `I'm a Computer Science and Engineering student (${profile.education.graduation}) with a focused interest in Data Analytics and Artificial Intelligence. I enjoy the full journey of data: cleaning messy sources, exploring patterns, and turning findings into clear, decision-ready stories.`,
    'I work hands-on with Python, SQL, Excel, and Power BI to analyse datasets, build dashboards, and develop machine learning models. What drives me is solving real-world problems — from supply chain forecasting to urban heat prediction — where data leads to practical impact.',
    'I believe in continuous learning and learning by building. Every project I take on is a chance to sharpen my analytical thinking and ship something useful.',
  ],
  highlights: [
    { label: 'Degree', value: profile.education.degree },
    { label: 'Expected Graduation', value: profile.education.graduation },
    { label: 'CGPA', value: profile.education.cgpa },
    { label: 'Focus', value: 'Data Analytics, AI & ML' },
  ],
}

export type SkillCategory = {
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analytics',
    description: 'Querying, exploring and visualising data for decisions.',
    icon: BarChart3,
    skills: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Data Visualization', 'EDA'],
  },
  {
    title: 'Programming',
    description: 'Core languages for analysis and problem solving.',
    icon: Code2,
    skills: ['Python', 'C', 'Java'],
  },
  {
    title: 'Machine Learning',
    description: 'Building and evaluating predictive models.',
    icon: Brain,
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Classification', 'Feature Engineering'],
  },
  {
    title: 'AI & Development',
    description: 'Shipping AI-powered apps and collaborating on code.',
    icon: Sparkles,
    skills: ['Generative AI', 'Streamlit', 'HTML', 'CSS', 'Git', 'GitHub'],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    title: 'SupplyTwin AI',
    description:
      'An AI-powered digital twin for intelligent supply chain prediction, simulation and decision support. The system predicts demand, inventory shortages, supplier delays, transportation delays and cost impact while allowing managers to simulate different business scenarios.',
    image: '/projects/supplytwin-ai.png',
    technologies: ['Python', 'Machine Learning', 'Data Science', 'AI', 'Streamlit'],
    liveUrl: 'https://supplytwin-ai.streamlit.app',
    githubUrl: `${profile.links.github}/supplytwin-ai`,
  },
  {
    title: 'AI-Based Urban Heat Prediction and Cooling Recommendations',
    description:
      'An AI-powered application that analyzes weather and environmental data to predict urban heat conditions and provide intelligent cooling recommendations.',
    image: '/projects/urban-heat.png',
    technologies: ['React', 'Flask', 'Python', 'Machine Learning', 'OpenWeather API'],
    liveUrl: 'https://urban-heat-ai.vercel.app',
    githubUrl: `${profile.links.github}/urban-heat-prediction`,
  },
  {
    title: 'Next Project',
    description:
      'A new data analytics project is in progress. Edit this card in lib/portfolio-data.ts to add its title, description, technologies and links.',
    image: '/projects/coming-soon.png',
    technologies: ['Python', 'SQL', 'Power BI'],
    liveUrl: '#projects',
    githubUrl: profile.links.github,
    placeholder: true,
  },
]

export const experiences = [
  {
    role: 'Data Science Intern',
    company: 'SkillCraft Technology',
    period: 'June 2025 – July 2025',
    points: [
      'Performed data cleaning and preprocessing.',
      'Conducted exploratory data analysis using Python, SQL and Excel.',
      'Built and evaluated classification models.',
      'Generated insights and communicated findings through reports and visualizations.',
    ],
    tools: ['Python', 'SQL', 'Excel', 'Classification'],
  },
]

export type Achievement = {
  title: string
  detail: string
  icon: LucideIcon
  tag: string
  credentialUrl?: string
}

export const achievements: Achievement[] = [
  {
    title: '1st Place',
    detail: 'College App Development Event',
    icon: Trophy,
    tag: 'Winner',
    credentialUrl: '/certificates/app-development-winner.pdf',
  },
  {
    title: 'Hackathon Participant',
    detail: 'Built and pitched solutions under time constraints with a team.',
    icon: Users,
    tag: 'Hackathon',
    credentialUrl: '/certificates/hackathon.pdf',
  },
  {
    title: 'Project Expo 2026',
    detail: 'AI Urban Heat Prediction Project Presentation',
    icon: Presentation,
    tag: 'Presentation',
    credentialUrl: '/certificates/project-expo-2026.pdf',
  },
]


export type Certification = {
  title: string
  area: string
  icon: LucideIcon
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    title: 'Power BI',
    area: 'Business Intelligence',
    icon: BarChart3,
    credentialUrl: '/certificates/power-bi.pdf',
  },
  {
    title: 'Microsoft Excel',
    area: 'Spreadsheet Analytics',
    icon: FileSpreadsheet,
    credentialUrl: '/certificates/excel.pdf',
  },
  {
    title: 'SQL',
    area: 'Databases & Querying',
    icon: Database,
    credentialUrl: '/certificates/sql.pdf',
  },
  {
    title: 'Data Analytics',
    area: 'Analytics Foundations',
    icon: BadgeCheck,
    credentialUrl: '/certificates/data-analytics.pdf',
  },
]

export const resume = {
  title: 'Download My Resume',
  description:
    'A one-page overview of my education, skills, projects and internship experience in data analytics and machine learning.',
  icon: Award,
}
