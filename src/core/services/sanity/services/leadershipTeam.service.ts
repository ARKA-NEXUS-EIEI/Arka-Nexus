import { fetchFromSanity } from "../../client";
import { LEADERSHIP_TEAM_QUERY } from "../queries/leadershipTeam.query";

import type { LeadershipTeam } from "../types/leadershipTeam.types";

export const getLeadershipTeam = async (): Promise<LeadershipTeam> => {
  return fetchFromSanity<LeadershipTeam>(LEADERSHIP_TEAM_QUERY);
};
