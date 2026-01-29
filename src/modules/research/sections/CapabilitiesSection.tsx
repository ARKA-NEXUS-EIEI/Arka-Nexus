import { Microscope, Monitor, Wrench, Users } from "lucide-react";
import type { ResearchCapability } from "../content/research.content";

const iconMap = {
  microscope: Microscope,
  monitor: Monitor,
  wrench: Wrench,
  users: Users,
};

interface CapabilitiesSectionProps {
  capabilities: {
    intro: string;
    items: ResearchCapability[];
  };
}

const CapabilitiesSection = ({ capabilities }: CapabilitiesSectionProps) => {
  return (
    <section className="py-section-y bg-card/50 relative">
      <div className="absolute inset-0 opacity-[0.02] dot-pattern text-foreground" />

      <div className="container mx-auto px-safe-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-content-gap items-center">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-body-sm mb-stack-gap">
              Our Capabilities
            </p>

            <h2 className="text-h2 mb-stack-gap">
              Infrastructure & Technical Foundation
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-content-gap text-body">
              {capabilities.intro}
            </p>

            <div className="space-y-stack-gap">
              {capabilities.items.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                  <div
                    key={item.title}
                    className="flex gap-card-gap opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-card bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold mb-1 text-h4">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-primary/30" />
              <div className="absolute inset-16 rounded-full border border-primary/40" />
              <div className="absolute inset-24 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-h1 text-primary">R&D</p>
                  <p className="text-body-sm text-muted-foreground mt-2">Innovation Hub</p>
                </div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-card bg-card border border-border flex items-center justify-center shadow-card">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-card bg-card border border-border flex items-center justify-center shadow-card">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 w-14 h-14 rounded-card bg-card border border-border flex items-center justify-center shadow-card">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 w-14 h-14 rounded-card bg-card border border-border flex items-center justify-center shadow-card">
                <Users className="w-7 h-7 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
