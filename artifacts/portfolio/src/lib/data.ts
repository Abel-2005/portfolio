export const PORTFOLIO_DATA = {
  personal: {
    name: "Abel B. Varughese",
    role: "Full Stack Developer | Data Science Enthusiast",
    email: "varugheseabel2005@gmail.com",
    phone: "+91-8595880249",
    linkedin: "https://www.linkedin.com/in/abel-b-varughese-9b537435a",
    github: "https://github.com/Abel-2005",
    bio: "Passionate Computer Science Engineering student at Lovely Professional University with CGPA 8.66. Driven by curiosity in Data Science, Machine Learning and Software Development. Currently doing a Data Science internship at Jyesta Corporate Entity, exploring ML model deployment and analytical problem-solving.",
    titles: ["Full Stack Developer", "Data Science Enthusiast", "Machine Learning Engineer", "Django Developer", "Problem Solver"]
  },
  stats: [
    { label: "Projects", value: 6 },
    { label: "Internships", value: 1 },
    { label: "Certifications", value: 3 },
    { label: "CGPA", value: 8.66, isDecimal: true }
  ],
  skills: {
    languages: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "SQL", level: 85 }
    ],
    frameworks: [
      { name: "Django", level: 82 },
      { name: "FastAPI", level: 78 },
      { name: "NumPy", level: 88 },
      { name: "Pandas", level: 88 },
      { name: "Scikit-learn", level: 82 },
      { name: "Matplotlib/Seaborn", level: 85 }
    ],
    tools: [
      { name: "Git/GitHub", level: 87 },
      { name: "MySQL", level: 82 },
      { name: "Power BI", level: 75 },
      { name: "Excel", level: 80 }
    ],
    core: [
      { name: "OOPs", level: 88 },
      { name: "DBMS", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Operating Systems", level: 80 },
      { name: "Computer Networks", level: 78 }
    ]
  },
  projects: [
    {
      title: "VoltX — Django E-Commerce Platform",
      period: "Feb 2026",
      github: "https://github.com/Abel-2005/voltx",
      description: "Built a full-stack Django-based e-commerce web application featuring user authentication with OTP login via email, product management, order tracking, and a fully custom-built admin dashboard. Implements email confirmation on registration, profile picture uploads, collections browsing, order history, and role-based access for admins.",
      techStack: ["Python", "Django", "MySQL", "HTML/CSS", "OTP Auth", "SMTP"],
      highlights: ["OTP Email Login", "Custom Admin Dashboard", "Order Tracking System", "Role-based Access Control"]
    },
    {
      title: "AutoComplete Suggestion System",
      period: "Jun 2025 – Jul 2025",
      github: "https://github.com/Abel-2005/-Auto-Complete-Suggestion-System-Java-Swing-",
      description: "Designed and implemented an autocomplete suggestion system using Trie data structure to efficiently generate prefix-based word suggestions. Built an interactive Java Swing GUI supporting real-time suggestions, dynamic word addition/removal, and user-driven frequency ranking. Implemented fuzzy matching logic with edit-distance traversal to handle spelling errors.",
      techStack: ["Java", "Swing (GUI)", "Trie Data Structure", "Fuzzy Search", "Collections Framework"],
      highlights: ["Trie-based O(prefix length) search", "Fuzzy matching with edit distance", "Real-time GUI updates", "Frequency-based ranking"]
    },
    {
      title: "Weather Prediction Using ML",
      period: "Mar 2025 – May 2025",
      github: "https://github.com/Abel-2005/Predictive-Analysis-Project",
      description: "Built and evaluated regression and classification models on a large weather dataset (~135k records, 35 features) to predict temperature and classify weather conditions. Applied feature engineering, standardization, and domain-based outlier treatment. Achieved improved predictive accuracy using Random Forest Regressor and Decision Tree Classifier.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      highlights: ["135k record dataset", "Random Forest + Decision Tree", "Feature engineering & standardization", "Statistical visualization"]
    },
    {
      title: "EDA — WHO Air Quality Index",
      period: "Apr 2025",
      github: "https://github.com/Abel-2005/EDA-FOR-AIR-QUALITY-INDEX",
      description: "Performed comprehensive exploratory data analysis on the WHO Ambient Air Quality Database, investigating key pollutants — PM2.5, PM10, and NO₂ — across countries and cities. Generated impactful visualizations revealing global air quality disparities, regional trends, and health-risk concentration levels.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
      highlights: ["WHO global dataset", "PM2.5, PM10, NO₂ analysis", "7 GitHub stars", "Country & city-level insights"]
    },
    {
      title: "Iris ML Deployment — FastAPI",
      period: "Dec 2025",
      github: "https://github.com/Abel-2005/iris-ml-fastapi",
      description: "Trained an Iris flower classification model and deployed it as a production-ready REST API using FastAPI, demonstrating the complete ML lifecycle from model training to serving. Integrated Git version control best practices including branching, merging, and conflict resolution throughout the development process.",
      techStack: ["Python", "FastAPI", "Scikit-learn", "REST API", "Git", "Uvicorn"],
      highlights: ["End-to-end ML deployment", "FastAPI REST endpoints", "Git branching strategy", "Production-ready serving"]
    },
    {
      title: "Excel EDA & Data Analysis",
      period: "May 2025",
      github: "https://github.com/Abel-2005/Excel-EDA",
      description: "Performed structured Exploratory Data Analysis using Excel, demonstrating proficiency in data cleaning, pivot tables, statistical summaries, and chart generation. Applied domain knowledge to extract actionable insights and present findings in an accessible, business-ready format.",
      techStack: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "Statistical Analysis"],
      highlights: ["Business-ready reporting", "Pivot table mastery", "Data cleaning & structuring", "Visual dashboards"]
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
      title: "ChatGPT-4 Prompt Engineering: Generative AI & LLMs",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      description: "Comprehensive course on prompt engineering techniques for ChatGPT-4, covering Generative AI fundamentals, Large Language Model (LLM) architecture, and practical AI application development.",
      skills: ["Prompt Engineering", "Generative AI", "LLMs", "ChatGPT", "AI Applications"],
      color: "cyan",
      viewLink: "https://drive.google.com/drive/u/0/home"
    },
    {
      title: "Placement Ace: Java Bootcamp",
      issuer: "Lovely Professional University",
      date: "Jun 2025 – Jul 2025",
      description: "Intensive Java bootcamp designed for placement preparation, covering core Java, OOP principles, data structures, algorithms, and interview problem-solving techniques.",
      skills: ["Java", "OOPs", "Data Structures", "Algorithms", "Problem Solving"],
      color: "violet",
      viewLink: "https://drive.google.com/drive/u/0/home"
    },
    {
      title: "NPTEL — Deep Learning",
      issuer: "NPTEL (IIT)",
      date: "Jan 2025 – Jul 2025",
      description: "6-month NPTEL course on Deep Learning offered by IIT professors, covering neural networks, CNNs, RNNs, backpropagation, and modern deep learning architectures.",
      skills: ["Deep Learning", "Neural Networks", "CNNs", "RNNs", "TensorFlow"],
      color: "amber",
      viewLink: "https://drive.google.com/drive/u/0/home"
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
