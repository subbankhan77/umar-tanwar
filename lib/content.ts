export const profile = {
  name: "Umar Tanwar",
  role: "Full Stack Developer",
  location: "Jaipur, India",
  email: "umartanwar027@gmail.com",
  codingSince: new Date("2022-06-01"),
  cv: "/Umar_Tanwar_CV.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/UmarTanwar3527" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/umartanwar/" },
    { label: "LeetCode", href: "https://leetcode.com/u/UmarTanwar_3527/" },
    { label: "X", href: "https://twitter.com/umar_tanwar27" },
  ],
};

export const skills = [
  { group: "Languages", items: ["Dart", "Python", "Java", "C++", "JavaScript", "SQL", "HTML", "CSS"] },
  { group: "Frontend", items: ["Flutter Web", "Responsive UI", "Material Design", "Bootstrap", "UI/UX"] },
  { group: "Backend", items: ["REST APIs", "WebSockets", "FastAPI", "Flask", "Django", "Pydantic", "Supabase", "OpenAI API"] },
  { group: "Mobile", items: ["Flutter", "Bloc / Cubit", "Provider", "Platform Channels", "Maps & Navigation", "GPS & Tracking", "QR Scanning", "Chromecast", "AirPlay"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "SQLite", "Hive", "Firebase"] },
  { group: "Authentication", items: ["Firebase Auth", "Google Sign-In", "Supabase Auth", "Django Auth"] },
  { group: "AI & machine learning", items: ["scikit-learn", "TensorFlow / Keras", "NLP", "NLTK", "Pandas", "NumPy", "Matplotlib", "Streamlit"] },
  { group: "Tools & deployment", items: ["Git", "GitHub", "Flutter DevTools", "Vercel", "Netlify", "Railway", "Firebase Hosting", "AWS"] },
];

export const experience = [
  {
    role: "Flutter Developer",
    company: "Emizen Tech, Jaipur",
    period: "July 2025 – Present",
    summary:
      "Archon Golf, a production app for private golf clubs and real-world tournaments, used by club members, managers, tournament managers and players.",
    points: [
      "Built tournament workflows: registrations, flights and pairings, scorecards, leaderboards, tournament status and club chat.",
      "Integrated and debugged REST APIs and backend services for score entry, handicaps, leaderboards and player management.",
      "Implemented golf-specific logic: course and playing handicaps, tie-breaking methods, player ordering and Pace of Play.",
      "Maintained real-time and device features, including WebSockets, Chromecast casting and AirPlay.",
      "Diagnosed production issues and collaborated on backend and API changes as club requirements evolved.",
    ],
  },
  {
    role: "Computer Science Expert",
    company: "Chegg India, Remote",
    period: "April 2024 – June 2025",
    summary: "Solved computer science and programming problems, and explained complex technical concepts clearly.",
    points: [],
  },
  {
    role: "Machine Learning & Data Science Trainee",
    company: "PIET",
    period: "June 2022 – August 2022",
    summary: "Built 14+ projects using Python, machine learning algorithms and Natural Language Processing.",
    points: [],
  },
];

export const education = [
  { title: "B.Tech, Information Technology & Engineering", place: "Poornima College of Engineering, Jaipur", period: "2020 – 2024" },
  { title: "CBSE Class 12 and Class 10", place: "Tagore Public School, Jaipur", period: "2020, 2018" },
];

export const achievements = [
  "Awarded “Outstanding Enthusiasm & Dedication” at Emizen Tech",
  "Solved 300+ data structures and algorithms problems",
];
