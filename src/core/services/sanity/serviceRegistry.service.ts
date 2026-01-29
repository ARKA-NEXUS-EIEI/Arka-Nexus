import { sanityClient } from "../client"
import { serviceRegistryQuery } from "./queries/serviceRegistry.query"

export const getServiceRegistry = async () => {
  return sanityClient.fetch(serviceRegistryQuery)
}
