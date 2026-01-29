import SDG_7 from "@/assets/images/sdg/SDG_7.png";
import SDG_9 from "@/assets/images/sdg/SDG_9.png";
import SDG_12 from "@/assets/images/sdg/SDG_12.png";
import SDG_13 from "@/assets/images/sdg/SDG_13.png";
import SDG_17 from "@/assets/images/sdg/SDG_17.png";

// ================================
// TYPES
// ================================

export interface SDGHeroContent {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface SDGGoal {
  number: number;
  icon: "sun" | "lightbulb" | "recycle" | "leaf" | "handshake";
  title: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface SDGContent {
  hero: SDGHeroContent;
  goals: SDGGoal[];
}

// ================================
// CONTENT
// ================================

export const sdgContent: SDGContent = {
  hero: {
    eyebrow: "Sustainable Development Goals",
    titlePrefix: "Our",
    titleHighlight: "SDG Commitment",
    description:
      "At ARKA NEXUS, we align our mission with the UN Sustainable Development Goals (SDGs) to foster sustainable industrial growth, clean energy adoption, and environmental responsibility. Through our consultancy and R&D initiatives, we drive positive environmental, social, and economic impact for a resilient and eco-friendly future.",
    primaryCtaLabel: "Explore Our Goals",
    secondaryCtaLabel: "R&D Initiatives",
  },

  goals: [
    {
      number: 7,
      icon: "sun",
      title: "Affordable and Clean Energy",
      description:
        "Promoting renewable energy initiatives such as small hydro, solar hybrid systems, and energy recovery projects to ensure access to clean, reliable power.",
      highlights: ["Small Hydro", "Solar Hybrid", "Energy Recovery"],
      image: SDG_7,
    },
    {
      number: 9,
      icon: "lightbulb",
      title: "Industry, Innovation, and Infrastructure",
      description:
        "Driving industrial innovation through advanced R&D, process optimization, and technology-driven consultancy that enhance operational efficiency.",
      highlights: ["Advanced R&D", "Process Optimization", "Tech Consultancy"],
      image: SDG_9,
    },
    {
      number: 12,
      icon: "recycle",
      title: "Responsible Consumption and Production",
      description:
        "Encouraging energy and resource conservation, waste reduction, and eco-friendly manufacturing practices in industrial operations.",
      highlights: [
        "Resource Conservation",
        "Waste Reduction",
        "Eco-friendly Manufacturing",
      ],
      image: SDG_12,
    },
    {
      number: 13,
      icon: "leaf",
      title: "Climate Action",
      description:
        "Supporting carbon footprint reduction, thermal efficiency studies, and sustainable energy management to mitigate climate impact.",
      highlights: [
        "Carbon Reduction",
        "Thermal Efficiency",
        "Sustainable Energy",
      ],
      image: SDG_13,
    },
    {
      number: 17,
      icon: "handshake",
      title: "Partnerships for the Goals",
      description:
        "Collaborating with academic institutions, industries, and research organizations to create meaningful synergies for sustainable development.",
      highlights: [
        "Academic Partnerships",
        "Industry Collaboration",
        "Research Networks",
      ],
      image: SDG_17,
    },
  ],
};
