import { useParams } from "react-router-dom";
import NotFoundPage from "../../../shared/not-found/NotFoundPage";

import { useServiceRegistry } from "../../../core/hooks/useServiceRegistry";
import { useServiceData } from "../hooks/useServiceData";

import AuditServiceTemplate from "../templates/AuditServiceTemplate";
import TrainingServiceTemplate from "../templates/TrainingServiceTemplate";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  const { services, loading: registryLoading } = useServiceRegistry();
  const { data, template, loading } = useServiceData(slug);

  if (registryLoading || loading) {
    return null; 
  }

  const registryItem = services.find(
    (service) => service.slug === slug && service.enabled !== false
  );

  if (!registryItem || !data) {
    return <NotFoundPage />;
  }

  switch (template) {
    case "audit":
      return <AuditServiceTemplate data={data} />;
    case "training":
      return <TrainingServiceTemplate data={data} />;
    default:
      return <NotFoundPage />;
  }
}
