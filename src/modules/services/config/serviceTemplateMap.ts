export type ServiceTemplateType = "audit" | "training";
export type TrainingHeroVariant = "shield" | "training";

export const SERVICE_MAP = {
  "energy-audit": {
    template: "audit",
    sanityType: "auditService",
    serviceKey: "energy-audit",
  },
  "power-quality": {
    template: "audit",
    sanityType: "auditService",
    serviceKey: "power-quality",
  },
  "harmonic-study": {
    template: "audit",
    sanityType: "auditService",
    serviceKey: "harmonic-study",
  },
  "solar-panel-study": {
    template: "audit",
    sanityType: "auditService",
    serviceKey: "solar-panel-study",
  },
  "thermal-study": {
    template: "audit",
    sanityType: "auditService",
    serviceKey: "thermal-study",
  },
  "vibration-audit": {
    template: "audit",
    sanityType: "auditService",
    serviceKey: "vibration-audit",
  },
  "industrial-training": {
    template: "training",
    sanityType: "trainingService",
    serviceKey: "industrial-training",
    heroVariant: "training",
  },
  "industrial-safety-audit": {
    template: "training",
    sanityType: "trainingService",
    serviceKey: "industrial-safety-audit",
    heroVariant: "shield",
  },
} as const;
