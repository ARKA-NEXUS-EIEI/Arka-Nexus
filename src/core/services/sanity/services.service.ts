import { sanityClient } from "../client";
import { auditServiceQuery } from "./queries/auditServices.query";
import { trainingServiceQuery } from "./queries/trainingServices.query";

export const getTrainingServiceData = async (serviceKey: string) => {
  return sanityClient.fetch(trainingServiceQuery(), { serviceKey });
};

export const getAuditServiceData = async (serviceKey: string) => {
  return sanityClient.fetch(auditServiceQuery(), { serviceKey });
};
