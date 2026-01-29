import GridMotion from "../sections/GridMotion";
import AboutSection from "../sections/AboutSection";
import CoreValuesSection from "../sections/CoreValuesSection";
import ServiceSection from "../../services/sections/ServiceSection";
import ClientsSection from "../sections/ClientsSection";
import ContactSection from "../sections/ContactSection";
import { useServiceRegistry } from "../../../core/hooks/useServiceRegistry";
import { SERVICE_LANDING_IMAGES } from "../../services/config/serviceLandingImages";

export default function HomePage() {
  const { services, loading } = useServiceRegistry();
  if (loading) return null;
  return (
    <div className="pt-nav-h">
      <GridMotion />
      <AboutSection />
      <CoreValuesSection />
      <ServiceSection
        services={(services ?? []).map((service) => ({
          id: service.order ?? 0,
          title: service.title,
          link: `/services/${service.slug}`,
          image: SERVICE_LANDING_IMAGES[service.slug],
        }))}
      />{" "}
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
