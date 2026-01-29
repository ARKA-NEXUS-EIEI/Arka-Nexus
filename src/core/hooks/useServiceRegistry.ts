import { useEffect, useState } from "react"
import { getServiceRegistry } from "../services/sanity/serviceRegistry.service"

export interface ServiceRegistryItem {
  title: string
  serviceKey: string
  slug: string
  template: "audit" | "training"
  order: number
  enabled: boolean
}

export const useServiceRegistry = () => {
  const [services, setServices] = useState<ServiceRegistryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getServiceRegistry()
      .then((data) => setServices(data ?? []))
      .finally(() => setLoading(false))
  }, [])

  return { services, loading }
}
