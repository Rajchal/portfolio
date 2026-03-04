const fromPublic = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Pranav Karmacharya",
    position: "Marketing Director at Black Face",
    img: fromPublic("assets/pranav.png"),
    review:
      "Working with Anjal has been an excellent experience. His ability to understand complex requirements and translate them into scalable technical solutions makes him a valuable engineer for any project.",
  },
  {
    id: 2,
    name: "Krishal Shilpakar",
    position: "Founder of Shilpakar Enterprises",
    img: fromPublic("assets/krishal.png"),
    review:
      "Anjal combines strong technical expertise with clear communication. He consistently delivers reliable systems and always ensures projects are completed efficiently and on time.",
  },
  {
    id: 3,
    name: "Abheet Budhathoki",
    position: "CEO of Budhathoki Handicrafts",
    img: fromPublic("assets/abheet.png"),
    review:
      "If you're looking for someone who can design and build dependable software systems, Anjal is a great choice. His problem-solving skills and dedication stand out.",
  },
];

export const myProjects = [
  {
    title: "Cook Fresh - Recipe Finding Platform",
    desc: "Cook Fresh is a recipe-finding platform that helps users discover new dishes and cooking techniques. It offers a vast collection of recipes, cooking tips, and meal plans, making it easy for users to find the perfect recipe for any occasion.",
    subdesc:
      "Built with Next.js, TailwindCSS, TypeScript, and Framer Motion, Cook Fresh provides a seamless user experience, with features like search filters, recipe categories, and a user-friendly interface.",
    href: "https://www.cookfresh.online",
    texture: fromPublic("textures/project/cookydemo.mp4"),
    logo: fromPublic("assets/proj1.svg"),
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: fromPublic("assets/spotlight1.png"),
    tags: [
      {
        id: 1,
        name: "React.js",
        path: fromPublic("assets/react.svg"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: fromPublic("assets/tailwindcss.png"),
      },
      {
        id: 3,
        name: "TypeScript",
        path: fromPublic("assets/typescript.png"),
      },
      {
        id: 4,
        name: "Framer Motion",
        path: fromPublic("assets/framer.png"),
      },
    ],
  },
  {
    title: "Landing Page - landing page for a IT GyaNepal",
    desc: "Landing Page is a modern, responsive landing page template designed for IT GyaNepal, a Note providing website. It features a clean, professional design with a focus on user experience and conversion optimization.",
    subdesc:
      "Built with React.js, TailwindCSS, TypeScript, and Next Js, Landing Page offers a seamless user experience, with features like smooth animations, responsive design, and a user-friendly interface.",
    href: "https://www.itgyanepal.com/membership",
    texture: fromPublic("textures/project/itgyandemo.mp4"),
    logo: fromPublic("assets/itgyanepal.png"),
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: fromPublic("assets/spotlight2.png"),
    tags: [
      {
        id: 1,
        name: "React.js",
        path: fromPublic("assets/react.svg"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: fromPublic("assets/tailwindcss.png"),
      },
      {
        id: 3,
        name: "TypeScript",
        path: fromPublic("assets/typescript.png"),
      },
      {
        id: 4,
        name: "Next Js",
        path: fromPublic("assets/next.png"),
      },
    ],
  },
  {
    title: "IT GyaNepal - Study Material Platform",
    desc: "IT GyaNepal is a study material platform that provides students with access to a wide range of educational resources, including notes, tutorials, and practice tests. It offers a user-friendly interface and a seamless learning experience.",
    subdesc:
      "It provides AI support for answers and questions, and a user-friendly interface. Built with React.js, TailwindCSS, TypeScript, and NextJs, IT GyaNepal offers a seamless user experience, with features like search filters, study materials, and a user-friendly interface.",
    href: "https://www.itgyanepal.com/",
    texture: fromPublic("textures/project/itgyandemo.mp4"),
    logo: fromPublic("assets/itgyanepal.png"),
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: fromPublic("assets/spotlight3.png"),
    tags: [
      {
        id: 1,
        name: "React.js",
        path: fromPublic("assets/react.svg"),
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: fromPublic("assets/tailwindcss.png"),
      },
      {
        id: 3,
        name: "TypeScript",
        path: fromPublic("assets/typescript.png"),
      },
      {
        id: 4,
        name: "Next Js",
        path: fromPublic("assets/next.png"),
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet, isAwk) => {
  return {
    deskScale: isSmall ? 4.5 : isMobile ? 5 : 6.7,
    deskPosition: isSmall
      ? [-0.5, -6.4, -8.5]
      : isMobile
        ? [-1, -8.4, -8.5]
        : [0.3, -7.4, -10.0],
    cubePosition: isSmall
      ? [6.5, 0, 0]
      : isMobile
        ? [11, -9, 0]
        : isTablet
          ? [10, -6.5, 0]
          : [10, -6.5, 0],
    reactLogoPosition: isSmall
      ? [4, 1, 0]
      : isMobile
        ? [10, -3, 0]
        : isTablet
          ? [10, -2, 0]
          : [10, -2, 0],
    ringPosition: isSmall
      ? [-5, 2, 0]
      : isMobile
        ? [-10, -0.5, 0]
        : isTablet
          ? [-15, -2, 0]
          : [-15, -2, 0],
    targetPosition: isSmall
      ? [-7.8, 0, -9]
      : isMobile
        ? [-15, -13, -9]
        : isTablet
          ? [-11, -10, -9]
          : [-13, -9, -9],
    nextPosition: isSmall
      ? [1, -2, -10]
      : isMobile
        ? [6, -5, -10]
        : isAwk
          ? [9, -5, -10]
          : isTablet
            ? [9, -5, -10]
            : [8, -5, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Network Engineer",
    pos: "Dishhome- Network Operations Center",
    duration: "2023 - 2024",
    title:
      "Worked in the Network Operations Center monitoring large-scale network infrastructure, troubleshooting connectivity issues, and ensuring uptime of critical systems. Gained hands-on experience with Linux systems, networking protocols, and production incident response.",
    icon: fromPublic("assets/tux.svg"),
    animation: "victory",
  },
  {
    id: 2,
    name: "Freelance Development",
    pos: "Backend & Web Developer",
    duration: "2022 - Present",
    title:
      "Developed full-stack web platforms and backend systems for multiple clients. Built REST APIs, implemented authentication systems, deployed applications using Docker and cloud infrastructure, and optimized performance for production workloads.",
    icon: fromPublic("assets/docker.svg"),
    animation: "clapping",
  },
  {
    id: 3,
    name: "Blockchain & Systems Learning",
    pos: "Independent Research & Development",
    duration: "2024 - Present",
    title:
      "Currently exploring blockchain infrastructure, distributed systems, and Rust development. Building experimental projects involving smart contract tooling, backend services, and infrastructure automation to move toward Web3 DevOps and protocol engineering.",
    icon: fromPublic("assets/solana.svg"),
    animation: "salute",
  },
];

export const move = (x, y, z, po1, po2, po3) => {
  if (x < po1) {
    x += 0.01;
  } else if (x > po2) {
    x -= 0.01;
  }

  if (y < po2) {
    y += 0.01;
  } else if (y > po2) {
    y -= 0.01;
  }

  if (z < po3) {
    z += 0.01;
  } else if (z > po3) {
    z -= 0.01;
  }

  return [x, y, z];
};
