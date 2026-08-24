export const CONTACT = {
  email: "huzaifa.ai2025@gmail.com",
  whatsappDisplay: "0313 9885871",
  whatsappUrl: "https://wa.me/923139885871",
  linkedin: "https://www.linkedin.com/in/muhammad-huzaifa-ai",
  linkedinDisplay: "linkedin.com/in/muhammad-huzaifa-ai",
  location: "Peshawar, KPK, Pakistan",
};

export const HEADLINES = [
  "ARCHITECT AI SYSTEMS THAT WORK.",
  "n8n EXPERT",
  "AGENTIC AI DEVELOPER",
  "AUTOMATE BUSINESS WORKFLOWS.",
];

export const CORE_TECH = ["n8n", "AI Agents", "Python", "RAG", "Docker"];

export const SKILLS = [
  "n8n Automation",
  "AI Agent Development",
  "API Integration",
  "Prompt Engineering",
  "Business Process Automation",
  "Database Management",
  "REST APIs",
];

export const EDUCATION = [
  {
    degree: "BS Artificial Intelligence (3rd Semester)",
    org: "City University of Science & Information Technology, Peshawar",
  },
  { degree: "Intermediate (FSc)", org: "The Quaid-e-Azam College, Swabi" },
  { degree: "Matriculation", org: "Allied School Swabi Campus" },
];

export const PRINCIPLES = [
  {
    title: "Systems, not scripts",
    body: "Every automation is designed as part of a larger intelligent system with clear inputs, logic and outputs.",
  },
  {
    title: "Reliability first",
    body: "Workflows are built to run unattended — with structured data, error paths and predictable behaviour.",
  },
  {
    title: "Continuous learning",
    body: "Actively studying AI while shipping real automation systems, so the work stays close to what is current.",
  },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    id: "workflow-automation",
    number: "01",
    title: "AI Workflow Automation",
    summary: "Repetitive operations turned into intelligent, self-running workflows.",
    detail:
      "I map the manual process end to end, then rebuild it as an automated workflow where AI handles the judgement steps and the system handles the movement of data between tools.",
    points: [
      "Process mapping and automation design",
      "AI decision steps inside operational workflows",
      "Structured data handling and storage",
      "Error handling so workflows run unattended",
    ],
    tags: ["n8n", "AI Agents", "APIs", "Google Sheets"],
  },
  {
    id: "consulting",
    number: "02",
    title: "AI Automation Consulting",
    summary: "Deciding what to automate — and what should stay human.",
    detail:
      "Before building anything, I review how work actually flows through the business, identify where AI and automation create real leverage, and lay out a practical architecture to get there.",
    points: [
      "Automation opportunity assessment",
      "Tooling and architecture recommendations",
      "Implementation roadmap and sequencing",
      "Guidance on AI agent scope and boundaries",
    ],
    tags: ["Systems Design", "Process Audit", "AI Strategy"],
  },
  {
    id: "rapid-development",
    number: "03",
    title: "Rapid AI Solution Development",
    summary: "Working AI systems built fast, then hardened.",
    detail:
      "For teams that need to validate an idea quickly, I build a functioning AI solution — agent, assistant or pipeline — and iterate on it until it is dependable enough for daily use.",
    points: [
      "Fast prototyping of AI agents and assistants",
      "Retrieval (RAG) over your own content",
      "Iteration based on real usage",
      "Containerised, portable deployments",
    ],
    tags: ["AI Agents", "RAG", "Python", "Docker"],
  },
  {
    id: "api-integrations",
    number: "04",
    title: "API Integrations",
    summary: "Your tools, connected and speaking the same language.",
    detail:
      "I connect platforms, models and internal services through their APIs so data moves automatically instead of being copied by hand between systems.",
    points: [
      "REST API integrations between platforms",
      "Custom logic and data transformation",
      "Tool calling for AI agents",
      "Authentication and reliable request handling",
    ],
    tags: ["REST APIs", "HTTP Requests", "JavaScript", "Tool Calling"],
  },
];

export type Project = {
  number: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  role: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Content Automation",
    title: "AI-Powered Social Media Content Engine",
    problem:
      "Producing consistent social content by hand consumes hours of writing, prompting and asset management every week.",
    solution:
      "Automatically generates social media content, creates AI image-generation prompts, produces visual assets, stores the results, and prepares them for publishing.",
    role: "Designed and built the complete AI-powered content automation pipeline.",
    tech: ["n8n", "Google Gemini", "KIE AI", "Nano Banana", "Google Sheets", "Blotato"],
  },
  {
    number: "02",
    category: "Lead Generation",
    title: "AI Lead Generation & Research System",
    problem:
      "Finding and qualifying prospects manually means slow research, scattered notes and inconsistent lead quality.",
    solution:
      "Finds potential businesses, researches their websites, extracts contact information, analyzes their AI/automation usage, scores leads, and stores qualified prospects in Google Sheets.",
    role: "Designed the lead-generation, research, extraction, qualification, and data-management workflow.",
    tech: ["n8n", "AI Agents", "Google Sheets", "JavaScript", "HTTP Requests", "Web Scraping"],
  },
  {
    number: "03",
    category: "Voice AI",
    title: "Voice Receptionist",
    problem:
      "Incoming calls need immediate, natural responses and real actions — not a static phone menu.",
    solution:
      "An AI voice receptionist that communicates naturally with callers and uses connected tools to perform actions during conversations.",
    role: "Built and configured the voice agent, connected external tools, and tested real-time tool execution.",
    tech: ["ElevenLabs", "AI Agents", "n8n", "APIs", "Tool Calling"],
  },
  {
    number: "04",
    category: "Publishing Pipeline",
    title: "AI Content Creation & Publishing System",
    problem:
      "Getting an idea from concept to a published post involves too many disconnected tools and manual handoffs.",
    solution:
      "Automates the creation of social media content from an idea, generates AI-assisted content and media, and moves it through the publishing workflow.",
    role: "Designed the end-to-end content creation and publishing automation.",
    tech: [
      "n8n",
      "Google Gemini",
      "AI Image Generation",
      "Google Sheets",
      "APIs",
      "Social Media Platforms",
    ],
  },
  {
    number: "05",
    category: "Customer Support",
    title: "AI Customer Support Agent",
    problem:
      "Support teams spend most of their day answering the same questions and performing routine account actions.",
    solution:
      "An AI-powered support agent that understands customer questions, provides relevant answers, handles common requests, and connects with external tools to automate support tasks.",
    role: "Designed and built the AI support workflow, including agent logic, tool integration, and automated customer interactions.",
    tech: ["AI Agents", "n8n", "Google Gemini", "APIs", "Tool Calling"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "He automated our client onboarding end to end. What used to take two days now takes minutes.",
    name: "Bilal A.",
    role: "Agency Owner, Lahore",
  },
  {
    quote:
      "The AI agent he built now handles most of our support tickets — like having an extra team member who never sleeps.",
    name: "Hina S.",
    role: "E-commerce Founder, Karachi",
  },
  {
    quote:
      "Fast, professional, and he actually understood our workflow before touching a single tool.",
    name: "Omar F.",
    role: "Marketing Director, Islamabad",
  },
];
