export interface ServiceCardItem {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface ServicesLandingContent {
  intro: {
    heading: string;
    description: string;
  };
}

export const servicesLandingContent: ServicesLandingContent = {
  intro: {
    heading: "Industrial Consultancy Services",
    description:
      "Consultancy is the practice of providing expert advice, guidance, or specialized knowledge to industry or organizations to help them solve problems, improve efficiency, or achieve their goals. Our technical consultants are professionals with expertise in specific fields like Energy Audit, Power Quality Audit, Thermal, Vibration Audit, Solar Panel efficiency, Industrial safety and Quality Audit, who analyze issues, recommend solutions, and assist in implementation.",
  },
};
