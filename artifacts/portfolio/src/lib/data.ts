export const PORTFOLIO_DATA = {
  personal: {
    name: "Abel B. Varughese",
    role: "Full Stack Developer | Data Science Enthusiast",
    email: "varugheseabel2005@gmail.com",
    phone: "+91-8595880249",
    linkedin: "https://www.linkedin.com/in/abel-b-varughese-9b537435a",
    github: "https://github.com/Abel-2005",
    bio: "Passionate Computer Science Engineering student at Lovely Professional University with CGPA 8.66. Driven by curiosity in Data Science, Machine Learning and Software Development. Currently doing Data Science internship at Jyesta Corporate Entity.",
    titles: ["Full Stack Developer", "Data Science Enthusiast", "Machine Learning Engineer", "Problem Solver"]
  },
  stats: [
    { label: "Projects", value: 2 },
    { label: "Internships", value: 1 },
    { label: "Certifications", value: 3 },
    { label: "CGPA", value: 8.66, isDecimal: true }
  ],
  skills: {
    languages: [
      { name: "C/C++", level: 80 },
      { name: "Java", level: 85 },
      { name: "Python", level: 90 }
    ],
    frameworks: [
      { name: "HTML/CSS", level: 90 },
      { name: "Django", level: 75 },
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Matplotlib/Seaborn", level: 85 }
    ],
    tools: [
      { name: "MySQL", level: 80 },
      { name: "Power BI", level: 75 },
      { name: "Git/GitHub", level: 85 },
      { name: "Excel", level: 80 }
    ],
    core: [
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 80 },
      { name: "Computer Networks", level: 78 },
      { name: "SQL", level: 85 },
      { name: "OOPs", level: 88 }
    ]
  },
  projects: [
    {
      title: "AutoComplete Suggestion System (Java Swing)",
      period: "Jun 2025 – Jul 2025",
      github: "https://github.com/Abel-2005",
      description: "Designed and implemented an autocomplete suggestion system using Trie data structure to efficiently generate prefix-based word suggestions. Built an interactive Java Swing GUI supporting real-time suggestions, dynamic word addition/removal, and user-driven frequency ranking. Implemented fuzzy matching logic to suggest relevant words even with spelling errors using edit-distance–based traversal. Integrated case sensitivity toggling, suggestion prioritization based on usage frequency, and optimized search performance.",
      techStack: ["Java", "Swing (GUI)", "Trie Data Structure", "Fuzzy Search Algorithms", "Collections Framework"],
      highlights: ["Trie-based O(prefix length) search", "Fuzzy matching with edit distance", "Real-time GUI updates"]
    },
    {
      title: "Weather Prediction Using Machine Learning",
      period: "Mar 2025 – May 2025",
      github: "https://github.com/Abel-2005",
      description: "Built and evaluated regression and classification models on a large weather dataset (~135k records, 35 features) to predict temperature and classify weather conditions. Applied feature engineering, standardization, and domain-based outlier treatment to enhance model performance and stability. Achieved improved predictive accuracy using Random Forest Regressor and Decision Tree Classifier. Visualized correlations, distributions, and prediction errors to support data-driven model selection.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      highlights: ["135k record dataset", "Random Forest + Decision Tree", "Feature engineering", "Statistical visualization"]
    }
  ],
  experience: [
    {
      company: "Jyesta Corporate Entity",
      role: "Data Science Intern",
      period: "Jul 2025 – Sep 2025",
      description: "Worked on data preprocessing and feature engineering tasks as part of a Data Science internship, supporting machine learning experimentation and analysis. Contributed to understanding and evaluating similarity-based models and user behaviour trends, focusing on result validation and performance interpretation. Strengthened foundational knowledge of Python, machine learning algorithms, and analytical problem-solving.",
      techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
    }
  ],
  certifications: [
    {
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Infosys",
      date: "Aug 2025"
    },
    {
      title: "Placement Ace: Java Bootcamp",
      issuer: "Lovely Professional University",
      date: "Jun 2025 – Jul 2025"
    },
    {
      title: "NPTEL-Deep Learning",
      issuer: "NPTEL",
      date: "Jan 2025 – Jul 2025"
    }
  ],
  education: [
    {
      institution: "Lovely Professional University, Punjab, India",
      degree: "B.Tech Computer Science and Engineering",
      score: "CGPA: 8.66",
      period: "Aug 2023 – Present",
      highlight: "Top academic performance in CS core subjects"
    },
    {
      institution: "St Joseph's Academy, Savita Vihar, New Delhi",
      degree: "Intermediate (Class 12)",
      score: "88%",
      period: "Apr 2022 – Mar 2023"
    },
    {
      institution: "St Joseph's Academy, Savita Vihar, New Delhi",
      degree: "Matriculation (Class 10)",
      score: "93.3%",
      period: "Apr 2020 – Mar 2021"
    }
  ]
};
