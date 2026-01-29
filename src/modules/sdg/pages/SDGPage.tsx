import { useEffect, useState } from "react";

import SDGHeroSection from "../sections/SDGHeroSection";
import SDGAlignmentSection from "../sections/SDGAlignmentSection";

import { getSDGContent } from "../providers/sdg.provider";
import type { SDGContent } from "../content/sdg.content";

const SDGPage = () => {
  const [content, setContent] = useState<SDGContent | null>(null);

  useEffect(() => {
    getSDGContent().then(setContent);
  }, []);

  if (!content) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <SDGHeroSection content={content.hero} />
        <SDGAlignmentSection goals={content.goals} />
      </main>
    </div>
  );
};

export default SDGPage;
