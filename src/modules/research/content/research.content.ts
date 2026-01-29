// ================================
// TYPES
// ================================

export interface ResearchHeroContent {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}

export interface ResearchArea {
  icon: "zap" | "sun" | "cpu" | "thermometer";
  title: string;
  description: string;
  highlights: string[];
}

export interface ResearchCapability {
  icon: "microscope" | "monitor" | "wrench" | "users";
  title: string;
  description: string;
}

export interface ResearchContent {
  hero: ResearchHeroContent;
  researchAreas: ResearchArea[];
  capabilities: {
    intro: string;
    items: ResearchCapability[];
  };
}

// ================================
// CONTENT
// ================================

export const researchContent: ResearchContent = {
  hero: {
    eyebrow: "Innovation for a Sustainable Future",
    title: "Research &",
    highlight: "Development",
    description:
      "At ARKA NEXUS, Research and Development is the cornerstone of our growth and innovation strategy. Our R&D division focuses on creating practical, sustainable, and technologically advanced solutions that address real-world industrial and environmental challenges.",
  },

  researchAreas: [
    {
      icon: "zap",
      title: "Energy & Power Quality",
      description:
        "Advancing auditing and improvement methods in power, energy, and thermal performance. We develop comprehensive solutions for power quality analysis, energy efficiency optimization, and thermal system improvements.",
      highlights: [
        "Power Quality Analysis",
        "Energy Auditing",
        "Performance Optimization",
      ],
    },
    {
      icon: "sun",
      title: "Renewable Systems",
      description:
        "Developing small hydro, solar hybrid, and energy recovery solutions for sustainability. Our focus is on creating scalable renewable energy systems that integrate seamlessly with existing infrastructure.",
      highlights: [
        "Small Hydro Projects",
        "Solar Hybrid Systems",
        "Energy Recovery",
      ],
    },
    {
      icon: "cpu",
      title: "Process Automation",
      description:
        "Enhancing productivity through IoT, smart monitoring, and data analytics. We create intelligent automation solutions that transform industrial operations with real-time insights and predictive capabilities.",
      highlights: [
        "IoT Integration",
        "Smart Monitoring",
        "Data Analytics",
      ],
    },
    {
      icon: "thermometer",
      title: "Thermal & Environment",
      description:
        "Focusing on waste heat recovery, insulation, and carbon reduction initiatives. Our research drives innovations in thermal efficiency and environmental sustainability for industrial applications.",
      highlights: [
        "Waste Heat Recovery",
        "Advanced Insulation",
        "Carbon Reduction",
      ],
    },
  ],

  capabilities: {
    intro:
      "Our R&D team operates with a strong technical foundation and access to world-class resources. We combine advanced tools with deep expertise to deliver innovative solutions that make a real difference.",

    items: [
      {
        icon: "microscope",
        title: "Advanced Testing & Measurement",
        description:
          "State-of-the-art testing and measurement instruments for precise data collection and analysis across all research domains.",
      },
      {
        icon: "monitor",
        title: "Simulation & Analysis Software",
        description:
          "Cutting-edge simulation and analysis software for energy and process modeling, enabling predictive insights and optimization.",
      },
      {
        icon: "wrench",
        title: "Prototype Development",
        description:
          "Comprehensive prototype development and pilot-scale testing facilities to validate concepts before full-scale implementation.",
      },
      {
        icon: "users",
        title: "Academic Partnerships",
        description:
          "Collaboration with leading academic and research institutions for applied studies and knowledge exchange.",
      },
    ],
  },
};
