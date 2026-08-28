export const profile = {
  name: "Mu-Ko (Claire) Chou",
  email: "nm6144012@gs.ncku.edu.tw",
  location: "Tainan, Taiwan",
  cvPath: "/Mu-Ko-Chou-CV.pdf",
  schoolUrl: "https://computing.ncku.edu.tw/index.php?Lang=zh-tw",
  universityUrl: "https://web.ncku.edu.tw/",
  advisorUrl: "https://sociolegal-lab.github.io/leader",
  labUrl: "https://sociolegal-lab.github.io/"
};

// TODO: fill in and uncomment once you have the URLs.
export const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "CV", href: "/cv/" }
  // { label: "GitHub", href: "https://github.com/YOUR_USERNAME" },
  // { label: "Google Scholar", href: "https://scholar.google.com/citations?user=YOUR_ID" }
];

export const lede =
  "My master's research uses sparse autoencoders to examine whether the same internal features track constitutional concepts across languages. I am applying to Ph.D. programs for Fall 2027 to continue my research in LLM interpretability.";

export const publications = [
  {
    title:
      "Tracing Constitutional Concepts Across Languages with Sparse Autoencoder Features",
    authors: "Shao-Man Lee, Mu-Ko Chou",
    venue: "Under review, Natural Legal Language Processing Workshop",
    year: "2026",
    links: []
  },
  {
    title:
      "TaDELs-RAG: An Entity-Oriented Evaluation Dataset for Retrieval-Augmented Generation in Taiwanese Law",
    authors: "Shao-Man Lee*, Mu-Ko Chou*, Chun-Che Huang, Chin-You Hou",
    venue: "Empirical Legal Studies Workshop",
    year: "2026",
    note: "* Equal contribution",
    links: [
      {
        label: "code",
        href: "https://github.com/Sociolegal-Lab/TaDELS-RAG-v1.0"
      }
    ]
  },
  {
    title:
      "Navigating Judicial Overload: A Multi-Agent System for Argument Tracking in Constitutional Courts",
    authors:
      "Shao-Man Lee, Mu-Ko Chou, Yu-Chiao Chen, Chun-Che Huang, Chun-Chieh Niu, Chin-You Hou",
    venue: "Computational Legal Studies Workshop, Singapore Management University",
    year: "2025",
    links: [{ label: "workshop", href: "https://site.smu.edu.sg/cls-2025" }]
  }
];

export const research = [
  {
    title: "Do multilingual models share a representation of constitutional concepts?",
    meta: "M.S. thesis · Feb 2026 – present",
    body:
      "I built a cross-lingual pipeline over 8,654 constitutional judgments in 25 languages. For a given concept, it locates the sparse-autoencoder features associated with it, traces their activations back to the passages that triggered them, and then checks whether the same feature fires for the same concept in another language. The question underneath is whether “shared multilingual representation” survives contact with legal text, where concepts are defined by institutions rather than by the world."
  },
  {
    title: "Retrieval-augmented generation for Taiwanese legal documents",
    meta: "Research assistant, SocioLegal Lab · Aug 2025 – present",
    body:
      "TaDELs-RAG is a benchmark for source-grounded question answering over Taiwanese law: 211 documents and 648 question–answer pairs, all human-reviewed. We score at the entity level rather than the answer level, because that is where the interesting failure hides — a response that reads as correct while citing the wrong provision."
  },
  {
    title: "How demographic framing moves LLM moral judgments",
    meta: "2024 – 2025",
    body:
      "Earlier work on 5 models across 1,769 demographic profiles and 9 cultural clusters, analyzing 38,350 Moral Machine decisions with AMCE and distance-to-human measures."
  }
];

export const experience = [
  {
    role: "Technical Project Manager and NLP contributor",
    org: "AI-Assisted Prosecution System, Taiwan Ministry of Justice",
    body:
      "Ran requirements, implementation, testing, and stakeholder communication for AI-assisted document workflows. Most of the work was translating what prosecutors actually needed into something an extraction pipeline could do."
  },
  {
    role: "Intern",
    org: "Cathay Financial Holdings",
    body:
      "Built and evaluated a GCP-based retrieval system for financial regulatory knowledge, with source attribution as the main design constraint."
  }
];

export const education = [
  {
    school: "National Cheng Kung University",
    degree: "M.S. in Intelligent Technology Systems, Miin Wu School of Computing",
    period: "Feb 2025 – expected Feb 2027",
    detail: "GPA 4.19/4.30"
  },
  {
    school: "National Cheng Kung University",
    degree: "B.A. in Political Science, College of Social Sciences",
    period: "Sep 2019 – Jun 2024"
  },
  {
    school: "Technical University of Darmstadt",
    degree: "Exchange student",
    period: "Spring 2023"
  }
];

export const honors = [
  {
    title: "Phi Tau Phi Scholastic Honor Society, Honorary Member",
    year: "2026"
  },
  {
    title: "Outstanding Student Scholarship, Miin Wu School of Computing, NCKU",
    year: "2025 – 2026",
    detail: "Awarded to top-ranked master's admits, renewed on academic and research performance."
  }
];

export const skills = [
  { label: "Languages", items: ["Python", "SQL", "LaTeX"] },
  {
    label: "ML / NLP",
    items: ["PyTorch", "Hugging Face Transformers", "Sparse autoencoders", "RAG"]
  },
  { label: "Tools", items: ["Git", "PostgreSQL", "Google Cloud Platform"] }
];

export const coursework = [
  "Natural Language Processing",
  "Advanced Legal Large Language Model Implementation",
  "Fundamentals of Deep Learning Networks",
  "Singular Value Decompositions and Data Analysis",
  "Artificial Intelligence and Democratic Governance",
  "Computer Vision and Deep Learning"
];
