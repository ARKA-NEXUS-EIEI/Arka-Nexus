import { fetchFromSanity } from "../../client";
import { SNAPSHOTS_QUERY } from "../queries/snapshots.query";

import type { SnapshotsDocument } from "../types/snapshots.types";

export const getSnapshotsPage = async (): Promise<SnapshotsDocument> => {
  return fetchFromSanity<SnapshotsDocument>(SNAPSHOTS_QUERY);
};
