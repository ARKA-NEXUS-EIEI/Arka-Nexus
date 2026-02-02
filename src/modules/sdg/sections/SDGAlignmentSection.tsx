import { Sun, Lightbulb, Recycle, Leaf, Handshake } from "lucide-react";
import type { SDGGoal } from "../content/sdg.content";

const iconMap = {
  sun: Sun,
  lightbulb: Lightbulb,
  recycle: Recycle,
  leaf: Leaf,
  handshake: Handshake,
};

interface SDGAlignmentSectionProps {
  goals: SDGGoal[];
}

const SDGAlignmentSection = ({ goals }: SDGAlignmentSectionProps) => {
  return (
    <section id="sdg-alignment" className="py-section-y relative scroll-mt-nav-h">
      <div className="container mx-auto px-safe-x">
        <div className="text-center mb-content-gap">
          <p className="text-primary font-medium tracking-widest uppercase text-body-sm mb-stack-gap">
            Our Commitment
          </p>
          <h2 className="text-h2 mb-stack-gap">SDG Alignment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-body">
            We actively contribute to five key Sustainable Development Goals,
            driving meaningful change across energy, industry, and environmental
            sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-grid-gap">
          {goals.map((goal, index) => {
            const Icon = iconMap[goal.icon];

            return (
              <div
                key={goal.number}
                className="group relative bg-card border border-border rounded-card overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Header Image Container - Updated with flex-col for mobile */}
                <div className="relative flex flex-col sm:block bg-gradient-to-br from-primary/10 to-primary/5">
                  
                  {/* Badge: Sits above image on mobile, floats on desktop */}
                  <div className="relative w-full px-4 py-3 bg-primary/95 flex items-center gap-2 z-10 sm:absolute sm:top-4 sm:left-4 sm:w-auto sm:rounded-card sm:shadow-sm sm:backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
                    <span className="text-primary-foreground text-body-sm font-bold">SDG {goal.number}</span>
                  </div>

                  {/* Image wrapper: Ensures consistent height */}
                  <div className="relative h-48 w-full flex items-center justify-center p-4">
                    {goal.image && (
                      <img
                        src={goal.image}
                        alt={`SDG ${goal.number} - ${goal.title}`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                </div>

                <div className="p-card-gap">
                  <h3 className="text-h3 mb-stack-gap group-hover:text-primary transition-colors">
                    {goal.title}
                  </h3>

                  <p className="text-muted-foreground text-body-sm leading-relaxed mb-stack-gap">
                    {goal.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {goal.highlights.map((highlight) => (
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

export default SDGAlignmentSection;