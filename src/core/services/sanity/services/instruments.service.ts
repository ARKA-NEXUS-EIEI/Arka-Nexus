import { fetchFromSanity } from "../../client";
import { INSTRUMENTS_QUERY } from "../queries/instruments.query";

import type { Instrument } from "../types/instruments.types";

export const getInstruments = async (): Promise<Instrument[]> => {
  return fetchFromSanity<Instrument[]>(INSTRUMENTS_QUERY);
};
