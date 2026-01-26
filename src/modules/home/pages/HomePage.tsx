import { servicesLandingContent } from "../../services/content/servicesLanding.content";
import ServiceSection from "../../services/sections/ServiceSection";
import AboutSection from "../sections/AboutSection";
import ClientsSection from "../sections/ClientsSection";
import ContactSection from "../sections/ContactSection";
import CoreValuesSection from "../sections/CoreValuesSection";
import GridMotion from "../sections/GridMotion";

export default function HomePage() {
  return (
    <div className="pt-nav-h">
      <GridMotion />
      <AboutSection />
      <CoreValuesSection />
      <ServiceSection services={servicesLandingContent.services} />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
