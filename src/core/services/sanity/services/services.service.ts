import { fetchFromSanity } from "../../client";
import { auditServiceQuery } from "../queries/auditServices.query";
import { trainingServiceQuery } from "../queries/trainingServices.query";

import type { AuditServiceData, TrainingServiceData } from "../types/services.types";

export const getAuditServiceData = async (
  type: string,
): Promise<AuditServiceData> => {
  return fetchFromSanity<AuditServiceData>(auditServiceQuery(type));
};

export const getTrainingServiceData = async (
  type: string,
): Promise<TrainingServiceData> => {
  return fetchFromSanity<TrainingServiceData>(trainingServiceQuery(type));
};
