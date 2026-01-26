import type { SanityImageSource } from "@sanity/image-url";

export interface AuditServiceData {
  _id: string;
  title: string;
  description: string;
  images: SanityImageSource[];
  auditImages: SanityImageSource[];
  steps: string[];
  keySteps: string[];
  benefits: string[];
}

export interface TrainingServiceData {
  _id: string;
  title: string;
  description: string;
  intro: string;
  images: SanityImageSource[];
  keyAreas: string[];
  needs: string[];
  objectives: string[];
  stages: string[];
  quote: string;
}