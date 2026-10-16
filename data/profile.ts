// All personal content for the site lives here.
// Edit this file to update the text — no component changes needed.

export type ContactLink = {
  label: string;
  /** Leave empty ("") to hide the link on the site. */
  value: string;
};

export type LearningArea = {
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  role: string;
  roleShort: string;
  headline: string;
  intro: string;
  about: {
    heading: string;
    paragraphs: string[];
  };
  learning: LearningArea[];
  focus: {
    heading: string;
    text: string;
  };
  contact: {
    heading: string;
    text: string;
    /** Just the address, e.g. "name@example.com". Leave empty to hide. */
    email: string;
    /** Full profile URL, e.g. "https://github.com/username". Leave empty to hide. */
    github: string;
    /** Full profile URL, e.g. "https://www.linkedin.com/in/username". Leave empty to hide. */
    linkedin: string;
  };
};

export const profile: Profile = {
  name: "Harsh Indal Singh",
  role: "B.Tech CSE (Artificial Intelligence) Student",
  roleShort: "B.Tech CSE (Artificial Intelligence)",
  headline: "Curious mind. Constant learning. Building what's next.",
  intro:
    "I'm a computer science student exploring programming, problem-solving, and the foundations of software development. I'm focused on learning the fundamentals, improving through practice, and gradually turning ideas into useful things.",

  about: {
    heading: "A little about me.",
    paragraphs: [
      "I'm Harsh, a B.Tech student specializing in Computer Science and Engineering (Artificial Intelligence). I'm developing my programming skills and building a strong foundation in computer science.",
      "I enjoy understanding how technology works, approaching problems logically, and learning concepts step by step. My goal is to grow into a capable software engineer through consistent practice and practical learning.",
    ],
  },

  learning: [
    {
      title: "Programming",
      description:
        "Learning programming fundamentals, code structure, and writing readable code.",
    },
    {
      title: "Problem Solving",
      description:
        "Improving logical reasoning and learning to break complex problems into smaller steps.",
    },
    {
      title: "Computer Science",
      description:
        "Exploring data structures, algorithms, and core computer science concepts.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Developing an understanding of AI fundamentals and the ideas behind intelligent systems.",
    },
  ],

  // Update this as your goals change.
  focus: {
    heading: "One step at a time.",
    text: "Right now, I'm focused on strengthening my programming fundamentals, improving my problem-solving skills, and learning the concepts that form the foundation of good software engineering.",
  },

  contact: {
    heading: "Have something in mind?",
    text: "I'm open to connecting with fellow students, developers, and people who enjoy learning and building things.",
    // Empty values are hidden automatically.
    email: "in.singhharsh14@gmail.com",
    github: "https://github.com/insinghharsh15-netizen",
    linkedin: "https://www.linkedin.com/in/harsh-singh-413b64423/",
  },
};
