export type Lang = "es" | "en";

export const SOCIAL = {
  github: "https://github.com/serpalucas02",
  linkedin: "https://www.linkedin.com/in/lucas-serpaa/",
  email: "serpalucas02@gmail.com",
  courseRepo: "https://github.com/serpalucas02/solidity-portfolio",
};

// Language-independent project data; copy (name/desc) lives in CONTENT.
export const PROJECTS = [
  {
    key: "garden",
    emoji: "🌱",
    demo: "https://onchain-garden.vercel.app",
    repo: "https://github.com/serpalucas02/onchain-garden",
    tech: ["Solidity", "Foundry", "On-chain SVG", "Next.js", "wagmi"],
    glow: "bg-emerald-500/10",
    chip: "text-emerald-300",
    border: "hover:border-emerald-400/30",
  },
  {
    key: "streampay",
    emoji: "💸",
    demo: "https://streampay-phi.vercel.app",
    repo: "https://github.com/serpalucas02/streampay",
    tech: ["Solidity", "Foundry", "ERC-20", "Next.js", "wagmi"],
    glow: "bg-sky-500/10",
    chip: "text-sky-300",
    border: "hover:border-sky-400/30",
  },
  {
    key: "miniswap",
    emoji: "🔁",
    demo: "https://miniswap-delta.vercel.app",
    repo: "https://github.com/serpalucas02/miniswap",
    tech: ["Solidity", "Foundry", "AMM / DeFi", "Next.js", "wagmi"],
    glow: "bg-violet-500/10",
    chip: "text-violet-300",
    border: "hover:border-violet-400/30",
  },
] as const;

export const STACK = [
  "Solidity",
  "Foundry",
  "OpenZeppelin",
  "Chainlink",
  "Uniswap V2/V3",
  "Next.js",
  "wagmi",
  "viem",
  "React / React Native",
  "Node.js",
  "TypeScript",
  "Oracle / PL-SQL",
];

export const CONTENT = {
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", stack: "Stack", contact: "Contacto" },
    hero: {
      badge: "Disponible para nuevos proyectos",
      role: "Blockchain Developer · Senior Full-Stack Developer",
      tagline: "Construyo aplicaciones blockchain seguras y bien testeadas, de extremo a extremo **(contrato + dApp)**.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contacto",
    },
    about: {
      label: "Sobre mí",
      heading: "Senior full-stack, ahora enfocado en blockchain",
      body: [
        "Soy desarrollador full-stack especializándome en **blockchain**. Vengo de varios años construyendo software de producción para el **sector financiero** —el área de inversiones de Santander Río y la aseguradora Zurich Santander— y aplicaciones empresariales (hoy **Senior Full-Stack Developer** en TanGo Energy Argentina).",
        "Esa experiencia en sistemas críticos me dejó un foco fuerte en **seguridad, testing y código robusto**, que ahora aplico al desarrollo on-chain con **mentalidad de auditor**: tests exhaustivos (incluidos casos adversariales) y revisión de vulnerabilidades antes de cada deploy.",
      ],
      location: "CABA, Buenos Aires, Argentina",
    },
    projects: {
      label: "Proyectos destacados",
      heading: "Tres dApps propias, fullstack",
      subtitle:
        "Cada una con **contrato auditado**, testeada a fondo, deployada y **verificada en Sepolia**, y demo en vivo.",
      demo: "Demo en vivo",
      code: "Código",
      items: {
        garden: {
          name: "On-Chain Garden",
          desc: "**NFT dinámico 100% on-chain**: una planta que crece al regarla y se marchita si la descuidás. Imagen (SVG) y metadata generadas por el propio contrato, **sin IPFS**.",
        },
        streampay: {
          name: "StreamPay",
          desc: "**Streaming de pagos ERC-20** en tiempo real (sueldo por segundo): create / withdraw / cancel con **pull-settlement** anti-bloqueo y un contador que sube en vivo.",
        },
        miniswap: {
          name: "MiniSwap",
          desc: "**AMM de producto constante (x·y=k)** hecho **desde cero**: swap + add/remove liquidity con LP tokens y fee del 0.3%. El motor de un DEX, no solo una integración.",
        },
      },
    },
    course: {
      label: "Formación",
      heading: "Blockchain Accelerator",
      body: "**21 proyectos** del programa, de fundamentos de Solidity a **DeFi avanzado**: AMMs, lending, oráculos Chainlink, VRF, firmas EIP-712, inline assembly y más. Todo en un monorepo con tests.",
      cta: "Ver el repositorio",
    },
    stack: { label: "Stack", heading: "Tecnologías" },
    contact: {
      label: "Contacto",
      heading: "Hablemos",
      body: "Busco sumarme a un equipo de **Web3 / Blockchain**. Abierto a **trabajo remoto**; me manejo en español e inglés (escrito).",
    },
    footer: "Gracias por tu interés.",
  },
  en: {
    nav: { about: "About", projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: {
      badge: "Available for new projects",
      role: "Blockchain Developer · Senior Full-Stack Developer",
      tagline: "I build secure, well-tested blockchain applications end to end **(contract + dApp)**.",
      ctaProjects: "View projects",
      ctaContact: "Contact",
    },
    about: {
      label: "About me",
      heading: "Senior full-stack, now focused on blockchain",
      body: [
        "I'm a full-stack developer specializing in **blockchain**. I come from several years building production software for the **financial sector** —Santander Río's investments area and the insurer Zurich Santander— and enterprise applications (currently **Senior Full-Stack Developer** at TanGo Energy Argentina).",
        "That work on critical systems gave me a strong focus on **security, testing and robust code**, which I now bring to on-chain development with an **auditor's mindset**: thorough, adversarial testing and a vulnerability review before every deploy.",
      ],
      location: "Buenos Aires, Argentina",
    },
    projects: {
      label: "Featured projects",
      heading: "Three standalone, full-stack dApps",
      subtitle:
        "Each with an **audited contract**, thorough tests, deployed and **verified on Sepolia**, plus a live demo.",
      demo: "Live demo",
      code: "Code",
      items: {
        garden: {
          name: "On-Chain Garden",
          desc: "**Fully on-chain dynamic NFT**: a plant that grows when watered and wilts if neglected. Its image (SVG) and metadata are generated by the contract itself — **no IPFS**.",
        },
        streampay: {
          name: "StreamPay",
          desc: "**Real-time ERC-20 payment streaming** (salary by the second): create / withdraw / cancel with anti-lock **pull settlement** and a counter that ticks up live.",
        },
        miniswap: {
          name: "MiniSwap",
          desc: "**Constant-product AMM (x·y=k)** built **from scratch**: swap + add/remove liquidity with LP tokens and a 0.3% fee. The engine of a DEX, not just an integration.",
        },
      },
    },
    course: {
      label: "Education",
      heading: "Blockchain Accelerator",
      body: "**21 program projects**, from Solidity fundamentals to **advanced DeFi**: AMMs, lending, Chainlink oracles, VRF, EIP-712 signatures, inline assembly and more. All in one tested monorepo.",
      cta: "View the repository",
    },
    stack: { label: "Stack", heading: "Technologies" },
    contact: {
      label: "Contact",
      heading: "Let's talk",
      body: "I'm looking to join a **Web3 / Blockchain** team. Open to **remote work**; I'm comfortable in both Spanish and English (written).",
    },
    footer: "Thanks for your interest.",
  },
} as const;
