export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  type: string;
  technologies?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "lipiksa",
    title: "Lipiksa",
    description: "An AI integrated Nepali typing tutor website",
    longDescription: "Lipiksa is a comprehensive learning platform designed to help users master Nepali typing in a simple, structured, and effective way. By integrating intelligent AI technology, the platform provides personalized feedback, adaptive lessons, and real-time performance analysis tailored to each learner’s progress. Whether you are a complete beginner learning the Nepali keyboard layout for the first time or an experienced user aiming to increase typing speed and accuracy, Lipiksa offers a guided learning path that gradually builds both confidence and skill. Through interactive practice sessions, smart error detection, and a well-organized curriculum, the platform helps users understand the structure and flow of the Nepali keyboard while continuously improving their typing efficiency.",
    image: "/images/lipsika.jpg",
    link: "#",
    type: "Web App",
    technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
    features: [
      "Interactive typing lessons",
      "Real-time error tracking",
      "AI-driven progress analysis",
      "Customizable practice sessions"
    ]
  },
  {
    id: "lipiksa-translator",
    title: "Lipiksa Translator",
    description: "A self designed algorithms of Nepali to Doteli (or vice-versa) translator",
    longDescription: "The Lipiksa Translator is a specialized linguistic tool designed to bridge the communication gap between the Nepali and Doteli languages. Built with custom-designed algorithms, the system focuses on delivering accurate, context-aware translations while carefully preserving the unique vocabulary, grammar patterns, and cultural nuances of the Doteli dialect. Instead of relying only on simple word-to-word conversion, the translator analyzes sentence structure and contextual meaning to produce more natural and meaningful translations. By supporting this regional language digitally, the Lipiksa Translator also contributes to the preservation and accessibility of Doteli, making it easier for speakers, learners, and researchers to communicate, study, and engage with the language in the modern digital environment.",
    image: "/images/translator.jpg",
    link: "#",
    type: "Algorithm",
    technologies: ["Python", "NLP", "Flask"],
    features: [
      "Bidirectional translation (Nepali <-> Doteli)",
      "Context-aware processing",
      "Dialect preservation",
      "API access for developers"
    ]
  },
  {
    id: "lipiksa-games",
    title: "Lipiksa Games",
    description: "A separate module of Lipiksa for dedicated on games on nepali typing",
    longDescription: "Lipiksa Games transforms the process of learning Nepali typing into an engaging and entertaining experience. Instead of relying only on traditional typing exercises, this module introduces an interactive environment where users can practice typing while playing games. The platform includes a collection of more than 50 different 2D web-based games, each designed to strengthen typing speed, accuracy, and familiarity with the Nepali keyboard layout. These games range from fast-paced challenges where users race against the clock, to word puzzles, reaction-based tasks, and creative typing adventures that keep learners actively involved throughout the practice process. Every game is designed with a specific learning purpose in mind. Some games focus on improving finger placement and keyboard memory, while others help users practice typing complete words and sentences quickly and correctly. As players progress through different levels and challenges, they gradually develop better muscle memory and confidence when typing in Nepali. The variety of games also ensures that learners never feel bored, as they can switch between different styles of gameplay while still practicing the same fundamental typing skills. By combining education with entertainment, Lipiksa Games creates a balanced learning environment where practice feels natural rather than repetitive. The gamified structure motivates users to keep improving their performance, beat their previous scores, and develop stronger typing habits over time. Through this approach, Lipiksa Games not only makes learning Nepali typing easier but also turns it into a fun and rewarding digital experience for learners of all levels.",
    image: "/images/game.jpg",
    link: "#",
    type: "Game",
    technologies: ["HTML5 Canvas", "JavaScript", "React"],
    features: [
      "Multiple game modes",
      "Global leaderboards",
      "Difficulty progression",
      "Instant feedback"
    ]
  }
];
