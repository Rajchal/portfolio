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
    name: "Certifications",
    href: "#certifications",
  },
  {
    id: 6,
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
    title: "Aegis – High-Performance Layer 7 Reverse Proxy",
    desc: "Aegis is a lightweight, high-performance Layer 7 reverse proxy built in Rust, designed to handle concurrent HTTP traffic with load balancing, health checks, and rate limiting.",
    subdesc:
      "Built using Tokio for async runtime and Hyper/Axum for HTTP handling, Aegis implements round-robin load balancing, active health monitoring of upstream services, request rate limiting, and structured logging via Tracing. Designed to explore networking internals, concurrency, and production-grade infrastructure concepts in Rust.",
    href: "https://github.com/yourusername/aegis-proxy",
    images: [
      fromPublic("assets/aegis1.png"),
      fromPublic("assets/aegis2.png"),
      fromPublic("assets/aegis3.png"),
      fromPublic("assets/aegis4.png")
    ],
    logo: fromPublic("assets/aegis.svg"),
    logoStyle: {
      backgroundColor: "#1e1e1e",
      border: "0.2px solid #2b2b2b",
      boxShadow: "0px 0px 60px 0px rgba(249, 104, 0, 0.35)",
    },
    spotlight: fromPublic("assets/spotlight4.png"),
    tags: [
      {
        id: 1,
        name: "Rust",
        path: fromPublic("assets/rust.svg"),
      },
      {
        id: 2,
        name: "Tokio",
        path: fromPublic("assets/tokio.svg"),
      },
      {
        id: 3,
        name: "Hyper",
        path: fromPublic("assets/hyper.svg"),
      },
      {
        id: 4,
        name: "Axum",
        path: fromPublic("assets/axum.svg"),
      },
      {
        id: 5,
        name: "Tracing",
        path: fromPublic("assets/tracing.svg"),
      },
    ],
  },
  {
    title: "ChainDeploy – GitOps Smart Contract Deployment Pipeline",
    desc: "ChainDeploy is a CI/CD pipeline for automated smart contract testing, building, and deployment triggered via GitOps workflows.",
    subdesc:
      "Integrated GitHub Actions with containerized testing environments, automated contract verification, and deployment to testnets. Includes environment-based configuration, secret management, and rollback simulation.",
    href: "https://github.com/yourusername/chaindeploy",
    images: [
      fromPublic("assets/star.png"),
      fromPublic("assets/star.png"),
      fromPublic("assets/star.png"),
    ],
    logo: fromPublic("assets/github.svg"),
    logoStyle: {
      backgroundColor: "#111111",
      border: "0.2px solid #333",
      boxShadow: "0px 0px 60px 0px rgba(255, 255, 255, 0.2)",
    },
    spotlight: fromPublic("assets/spotlight7.png"),
    tags: [
      { id: 1, name: "GitHub Actions", path: fromPublic("assets/githubactions.svg") },
      { id: 2, name: "Docker", path: fromPublic("assets/docker.svg") },
      { id: 3, name: "Web3", path: fromPublic("assets/ethereum.svg") },
      { id: 4, name: "CI/CD", path: fromPublic("assets/cicd.svg") },
    ],
  },
  {
    title: "HydraRPC – Distributed Web3 RPC Gateway",
    desc: "HydraRPC is a high-availability, multi-region RPC gateway designed to route blockchain requests across multiple full nodes with automatic failover and latency-based load balancing.",
    subdesc:
      "Built using Rust for performance-critical routing, Docker for containerization, and deployed across multiple cloud regions. The system includes health checks, rate limiting, Prometheus metrics, and Grafana dashboards for real-time monitoring. Designed to simulate production-grade Ethereum/Solana RPC infrastructure.",
    href: "https://github.com/yourusername/hydra-rpc",
    images: [
      fromPublic("assets/star.png"),
      fromPublic("assets/star.png"),
      fromPublic("assets/star.png"),
    ],
    logo: fromPublic("assets/rust.svg"),
    logoStyle: {
      backgroundColor: "#1e1e1e",
      border: "0.2px solid #333",
      boxShadow: "0px 0px 60px 0px rgba(249, 104, 0, 0.4)",
    },
    spotlight: fromPublic("assets/spotlight4.png"),
    tags: [
      { id: 1, name: "Rust", path: fromPublic("assets/rust.svg") },
      { id: 2, name: "Docker", path: fromPublic("assets/docker.svg") },
      { id: 3, name: "Prometheus", path: fromPublic("assets/prometheus.svg") },
      { id: 4, name: "Grafana", path: fromPublic("assets/grafana.svg") },
      { id: 5, name: "AWS", path: fromPublic("assets/aws.svg") },
    ],
  }
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

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Solution Architect",
    issuer: "Amazon Web Services",
    issued: "2025",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/5a470d79fce54982bee43135aee1a6d4",
    icon: fromPublic("assets/aws.svg"),
  },
  {
    id: 2,
    title: "NGINX MasterClass: NGINX Server & Custom Load Balancer Certificate",
    issuer: "Udemy",
    issued: "2025",
    credentialUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-0fcaa5e8-e6c6-4d4b-bf59-88563b5b7737.jpg",
    icon: fromPublic("assets/udemy.svg"),
  },
  {
    id: 3,
    title: "GitHub Actions Certification",
    issuer: "GitHub",
    issued: "2025",
    credentialUrl: "https://github.com/",
    icon: fromPublic("assets/github.svg"),
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
