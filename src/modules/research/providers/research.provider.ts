import { researchContent } from "../content/research.content";
import type { ResearchContent } from "../content/research.content";

export const getResearchContent = async (): Promise<ResearchContent> => {
  return researchContent;
};
