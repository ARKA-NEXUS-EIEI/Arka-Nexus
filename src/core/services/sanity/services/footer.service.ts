import { fetchFromSanity } from "../../client";
import { footerQuery } from "../queries/footer.query";

import type { FooterData } from "../types/footer.types";

export const getFooterData = async (): Promise<FooterData> => {
  return fetchFromSanity<FooterData>(footerQuery);
};
