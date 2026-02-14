export type FeaturedProject = {
  slug: string;
  name: string;
  description: string;
  impactLine: string;
  role: string;
  metric: { label: string; value: string };
  year: string;
  href: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "p7",
    name: "Plataforma‑Ingressos‑WhatsApp",
    description:
      "Venda de ingressos pelo WhatsApp com check‑in offline e painel admin, reduzindo fricção e falhas em dias de evento.",
    impactLine: "100% check‑in offline na portaria (PWA + fila local).",
    role: "Full‑stack",
    metric: { label: "Offline", value: "100%" },
    year: "2024",
    href: "/projects/p7",
    image: {
      src: "/images/3f015622-01e5-46c9-a13c-c655373c819a.png",
      alt: "Tela de administração e UI do projeto Plataforma‑Ingressos‑WhatsApp",
      width: 1200,
      height: 800
    }
  },
  {
    slug: "p3",
    name: "Habit Analyzer",
    description:
      "App web com analytics e relatórios; pré‑agregação e cache reduziram custo de leitura em janelas grandes.",
    impactLine: "−40% custo de leitura de analytics em janelas grandes.",
    role: "Arquitetura + Full‑stack",
    metric: { label: "Latência", value: "−40%" },
    year: "2023",
    href: "/projects/p3",
    image: {
      src: "/images/analytics-code.svg",
      alt: "Visual de analytics e código do projeto Habit Analyzer",
      width: 1200,
      height: 600
    }
  },
  {
    slug: "p5",
    name: "Relatório Rural — Quick Activity Button",
    description:
      "Aplicativo multiplataforma para gestão rural com atalhos rápidos; redução de tempo de lançamento em 45–60%.",
    impactLine: "45s → 20–25s no registro (−40–55% cliques).",
    role: "Mobile + UX",
    metric: { label: "Tempo", value: "45–60%" },
    year: "2023",
    href: "/projects/p5",
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fm=jpg&w=1200&q=80",
      alt: "Imagem ilustrativa de programação e UI",
      width: 1200,
      height: 800
    }
  }
];
