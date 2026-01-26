import { fetchFromSanity } from "../../client";
import { CORE_VALUES_QUERY } from "../queries/coreValues.query";

import type { CoreValue } from "../types/coreValues.types";

export const fetchCoreValues = async (): Promise<CoreValue[]> => {
  return fetchFromSanity<CoreValue[]>(CORE_VALUES_QUERY);
};
