import GridMotion from "./components/GridMotion";
import AboutSection from "./sections/AboutSection";
import CoreValuesSection from "./sections/CoreValuesSection";
import ServiceSection from "./components/ServiceSection";

export default function HomePage() {
  return (
    <div className="pt-nav-h">
      <GridMotion />
      <AboutSection />
      <CoreValuesSection />
      <ServiceSection />
      {/* other home sections will be added later */}
    </div>
  );
}
