import type { SDGHeroContent } from "../content/sdg.content";

interface SDGHeroSectionProps {
  content: SDGHeroContent;
}

const SDGHeroSection = ({ content }: SDGHeroSectionProps) => {
  const {
    eyebrow,
    titlePrefix,
    titleHighlight,
    description,
    primaryCtaLabel,
    secondaryCtaLabel,
  } = content;

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center mt-nav-h overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy-light to-background" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="container mx-auto px-safe-x relative z-10 text-center">
        <div className="max-w-arka mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase text-body-sm mb-stack-gap opacity-0 animate-fade-in">
            {eyebrow}
          </p>

          <h1 className="text-h1 mb-stack-gap opacity-0 animate-fade-in">
            {titlePrefix} <span className="text-gradient">{titleHighlight}</span>
          </h1>

          <p className="text-body text-muted-foreground leading-relaxed max-w-3xl mx-auto opacity-0 animate-fade-in text-justify">
            {description}
          </p>

          <div className="mt-content-gap flex justify-center gap-card-gap opacity-0 animate-fade-in">
            <a
              href="#sdg-alignment"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-button hover:bg-primary/90 transition-all glow-primary"
            >
              {primaryCtaLabel}
            </a>

            <a
              href="/research"
              className="px-8 py-3 border border-border text-foreground font-medium rounded-button hover:bg-secondary transition-all"
            >
              {secondaryCtaLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default SDGHeroSection;
