// Centralized content. Edit here to update the site everywhere it's used.

export const profile = {
  name: "Santhosh L",
  title: "Java Developer",
  secondaryTitle: "Full Stack Developer",
  location: "Chennai, India",
  intro:
    "I build scalable, reliable applications with clean, well-structured code — from Java backends and REST APIs to modern React interfaces. Currently exploring full stack development while sharpening my core engineering fundamentals.",
  resumeUrl: "\Resume_Santhosh.pdf",
  social: {
    github: "https://github.com/sandy29l",
    linkedin: "https://www.linkedin.com/in/santhosh-l-876b992b7/",
    email: "santhoshl2914@gmail.com",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const whatIDo = [
  {
    title: "Backend Development",
    description: "Designing robust services and REST APIs with Java and Node.js.",
    icon: "Server",
  },
  {
    title: "Frontend Development",
    description: "Building responsive, accessible interfaces with React and Tailwind CSS.",
    icon: "LayoutTemplate",
  },
  {
    title: "Database Development",
    description: "Modeling and querying data with MySQL, SQL and MongoDB.",
    icon: "Database",
  },
  {
    title: "Problem Solving",
    description: "Breaking down complex problems into clean, maintainable solutions.",
    icon: "Puzzle",
  },
];

export const aboutFacts = [
  { icon: "GraduationCap", label: "Computer Science Engineering" },
  { icon: "Code2", label: "Java Developer" },
  { icon: "Globe", label: "Full Stack Development" },
  { icon: "Rocket", label: "Problem Solver" },
  { icon: "MapPin", label: profile.location },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: "Primary", icon: "Coffee" },
      { name: "C", level: "Advanced", icon: "Terminal" },
      { name: "Python", level: "Intermediate", icon: "FileCode2" },
      { name: "JavaScript", level: "Advanced", icon: "Braces" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "Advanced", icon: "Code2" },
      { name: "CSS", level: "Advanced", icon: "Palette" },
      { name: "JavaScript", level: "Advanced", icon: "Braces" },
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Wind" },
      { name: "Bootstrap", level: "Intermediate", icon: "LayoutGrid" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", level: "Primary", icon: "Coffee" },
      { name: "Node.js", level: "Intermediate", icon: "Server" },
      { name: "Express.js", level: "Intermediate", icon: "Route" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: "Advanced", icon: "Database" },
      { name: "SQL", level: "Advanced", icon: "Table" },
      { name: "MongoDB", level: "Familiar", icon: "Leaf" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub", level: "Advanced", icon: "Github" },
      { name: "VS Code", level: "Advanced", icon: "Code" },
      { name: "Postman", level: "Intermediate", icon: "Send" },
    ],
  },
];

export const projects = [
  {
    title: "MCU Movies",
    description:
      "A movie browsing app for exploring the Marvel Cinematic Universe catalog, built with React and a public movie API.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "API"],
    github: "#",
    demo: "#",
    image: "/projects/mcu.png",
  },

  {
    title: "BulkMail Sender",

    description:
      "A full-stack bulk email platform that allows users to upload recipient lists, compose messages, and send emails efficiently through a secure email authentication system.",

    technologies: ["React", "Node.js", "Express", "Tailwind CSS"],

    github: "https://github.com/sandy29l/Bulkmail_Sender",

    demo: "#",
    image: "/projects/bulkmail.png",
  },
  {
    title: "Botnet Detection Using Machine Learning",
    description:
      "A machine-learning-based project designed to detect malicious network traffic and identify botnet activity using classical ML classifiers.",
    technologies: ["Python", "Scikit-Learn", "Random Forest", "SVM", "KNN", "Cybersecurity"],
    github: "#",
    demo: "#",
    image: "/projects/botnet.png",
    featured: true,
  },
  {
    title: "Actodo",
    description:
      "A full-stack activity management application that allows users to create accounts, securely log in, and manage their daily activities with a responsive and modern interface.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/sandy29l/actodo-project",
    demo: "https://actodo-project-xyxv.vercel.app/",
    image: "/projects/actodo.png",
  },
  {
    title: "Spotify Clone",
    description:
      "A front-end clone of Spotify's music player interface focused on pixel-accurate layout and interactive UI states.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    institution: "Saveetha Engineering College",
    duration: "2022 – 2026",
    achievements: ["Coursework in Data Structures, DBMS, OOP and Web Technologies"],
  },
];

export const experience = [
  {
    role: "Web Developer Intern",
    company: "Arjun vision technology",
    duration: "June-24 – July-24",
    technologies: ["HTML", "CSS", "JavaScript"],
    responsibilities: [
      "Developed responsive web interfaces",
      "Worked with HTML, CSS and JavaScript",
      "Improved UI components",
      "Learned frontend development practices",
      "Collaborated on real-world projects",
    ],
  },
];
