import { fetchFromSanity } from "../../client";
import { CLIENT_LOGOS } from "../queries/clients.query";

import type { ClientLogo } from "../types/clients.types";

export const fetchClientLogos = async (): Promise<ClientLogo[]> => {
  return fetchFromSanity<ClientLogo[]>(CLIENT_LOGOS);
};