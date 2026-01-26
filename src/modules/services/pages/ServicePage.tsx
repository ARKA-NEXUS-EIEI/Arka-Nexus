import { useParams } from "react-router-dom";

import NotFoundPage from "../../../shared/not-found/NotFoundPage";
import { useServiceData } from "../hooks/useServiceData";
import AuditServiceSkeleton from "../skeleton/AuditServiceSkeleton";
import TrainingServiceSkeleton from "../skeleton/TrainingServiceSkeleton";
import AuditServiceTemplate from "../templates/AuditServiceTemplate";
import TrainingServiceTemplate from "../templates/TrainingServiceTemplate";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, template, loading } = useServiceData(slug!);

  // Render skeletons while loading based on template type
  if (loading && template === "training") return <TrainingServiceSkeleton />;
  if (loading && template === "audit") return <AuditServiceSkeleton />;

  // Render NotFoundPage if no data or template
  if (!data || !template) return <NotFoundPage />;

  // Render the appropriate template based on the type
  if (template === "audit") return <AuditServiceTemplate data={data} />;

  return <TrainingServiceTemplate data={data} />;
};

export default ServicePage;
