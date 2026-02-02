import { Zap, Sun, Cpu, Thermometer } from "lucide-react";
import type { ResearchArea } from "../content/research.content";

const iconMap = {
  zap: Zap,
  sun: Sun,
  cpu: Cpu,
  thermometer: Thermometer,
};

interface ResearchAreasSectionProps {
  areas: ResearchArea[];
}

const ResearchAreasSection = ({ areas }: ResearchAreasSectionProps) => {
  return (
    <section className="py-section-y relative">
      <div className="container mx-auto px-safe-x">
        <div className="text-center mb-content-gap">
          <p className="text-primary font-medium tracking-widest uppercase text-body-sm mb-stack-gap">
            Our Focus
          </p>
          <h2 className="text-h2 mb-stack-gap">Core Areas of Research</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-body text-justify md:text-center">
            Our R&D initiatives span across four key domains, each designed to push
            the boundaries of innovation while delivering practical industrial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-grid-gap">
          {areas.map((area, index) => {
            const Icon = iconMap[area.icon];

            return (
              <div
                key={area.title}
                className="group relative bg-card border border-border rounded-card p-8 hover:border-primary/50 transition-all duration-300 shadow-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-card bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-card bg-primary/10 flex items-center justify-center mb-card-gap">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-h3 mb-stack-gap">{area.title}</h3>

                  <p className="text-muted-foreground leading-relaxed mb-card-gap text-body-sm">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-body-sm font-medium px-3 py-1.5 bg-secondary rounded-button text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreasSection;
