import { sdgContent } from "../content/sdg.content";
import type { SDGContent } from "../content/sdg.content";

export const getSDGContent = async (): Promise<SDGContent> => {
  return sdgContent;
};
