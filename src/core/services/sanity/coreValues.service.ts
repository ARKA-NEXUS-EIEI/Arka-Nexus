import { sanityClient } from "../client";
import { CORE_VALUES_QUERY } from "./queries/coreValues.query";

export const fetchCoreValues = async () => {
  return sanityClient.fetch(CORE_VALUES_QUERY);
};
