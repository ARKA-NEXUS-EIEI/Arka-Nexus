import type { ResearchHeroContent } from "../content/research.content";

interface HeroSectionProps {
  content: ResearchHeroContent;
}

const HeroSection = ({ content }: HeroSectionProps) => {
  const {
    eyebrow,
    title,
    highlight,
    description,
  } = content;

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-nav-h overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy-light to-background" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="container mx-auto px-safe-x relative z-10 text-center">
        <div className="max-w-arka mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase text-body-sm mb-stack-gap opacity-0 animate-fade-in">
            {eyebrow}
          </p>

          <h1 className="text-h1 mb-stack-gap opacity-0 animate-fade-in">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>

          <p className="text-body text-muted-foreground leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
