import { useEffect, useState } from "react";

import HeroSection from "../sections/ResearchHeroSection";
import ResearchAreasSection from "../sections/ResearchAreasSection";
import CapabilitiesSection from "../sections/CapabilitiesSection";

import { getResearchContent } from "../providers/research.provider";
import type { ResearchContent } from "../content/research.content";

const ResearchPage = () => {
  const [content, setContent] = useState<ResearchContent | null>(null);

  useEffect(() => {
    getResearchContent().then(setContent);
  }, []);

  if (!content) return null; // or skeleton later

  return (
    <div className="min-h-screen bg-background text-foreground mt-nav-h">
      <main>
        <HeroSection content={content.hero} />
        <ResearchAreasSection areas={content.researchAreas} />
        <CapabilitiesSection capabilities={content.capabilities} />
      </main>
    </div>
  );
};

export default ResearchPage;
