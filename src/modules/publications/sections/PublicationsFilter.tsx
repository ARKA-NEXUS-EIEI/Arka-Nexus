import { Search, Tag, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PublicationsFiltersProps {
  search: string;
  setSearch: (v: string) => void;
  type: "all" | "case-study" | "white-paper";
  setType: (v: "all" | "case-study" | "white-paper") => void;
  domains: string[];
  setDomains: (v: string[]) => void;
  allDomains: string[];
  resultsCount: number;
}

const PublicationsFilters = ({
  search,
  setSearch,
  type,
  setType,
  domains,
  setDomains,
  allDomains,
  resultsCount,
}: PublicationsFiltersProps) => {
  
  // Logic to determine if any filters are active
  const hasActiveFilters = search !== "" || domains.length > 0 || type !== "all";

  const handleClearAll = () => {
    setSearch("");
    setDomains([]);
    setType("all");
  };

  const toggleDomain = (domain: string) => {
    setDomains(
      domains.includes(domain)
        ? domains.filter((d) => d !== domain)
        : [...domains, domain]
    );
  };

  return (
    <section className="flex flex-col px-safe-x max-w-5xl mx-auto mb-section-y space-y-8 justify-center">
      {/* Search & Type Filter Row */}
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between bg-neutral-white/[0.03] backdrop-blur-md p-2 rounded-card border border-white/10 shadow-xl">
        
        {/* Modern Search Input */}
        <div className="relative w-full lg:max-w-[20rem] group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-textMuted group-focus-within:text-[#e66a1c] transition-colors" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search publications..."
            className="w-full pl-12 pr-4 py-3 bg-[#00001d] border border-white/10 rounded-xl text-neutral-white placeholder:text-neutral-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary/50 transition-all"
          />
        </div>

        {/* Type Filter */}
        <div className="flex bg-[#00001d] p-1.5 rounded-xl border border-white/10 overflow-hidden">
          {["all", "case-study", "white-paper"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t as any)}
              className={`px-3 py-2 rounded-card text-body-sm font-medium tracking-wide transition-all duration-300
                ${
                  type === t
                    ? "text-brand-primary bg-neutral-white/5"
                    : "text-neutral-textMuted hover:text-neutral-white hover:bg-neutral-white/5"
                }`}
            >
              {t === "all" ? "All" : t === "case-study" ? "Case Studies" : "White Papers"}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Filters & Clear Button Row */}
      <div className="flex flex-col gap-6 items-center px-2">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center w-full">
            <div className="flex items-center gap-2 text-brand-primary shrink-0">
              <Tag size={18} />
              <span className="text-body-sm font-medium uppercase">Domains</span>
              <span className="text-neutral-textMuted">|</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {allDomains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => toggleDomain(domain)}
                  className={`px-4 py-1.5 rounded-full text-body-sm font-medium transition-all duration-300 border
                    ${
                      domains.includes(domain)
                        ? "bg-brand-primary/20 border-brand-primary text-brand-primary"
                        : "bg-neutral-white/5 border-neutral-white/10 text-neutral-textMuted hover:border-neutral-white/30 hover:text-neutral-white"
                    }`}
                >
                  {domain}
                </button>
              ))}
            </div>
        </div>

        {/* Animated Results Counter & Clear Button */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-row items-center gap-6"
            >
              {/* Results Found Pill */}
              <div className="px-4 py-1 rounded-full bg-neutral-white/5 border border-neutral-white/10 text-neutral-textMuted text-body-sm font-medium">
                Showing <span className="text-brand-primary font-bold">{resultsCount}</span> {resultsCount === 1 ? 'result' : 'results'}
              </div>

              {/* Clear All Button */}
              <button
                onClick={handleClearAll}
                className="flex items-center gap-2 text-body-sm font-medium text-neutral-textMuted/80 hover:text-[#f97316]/50 transition-colors border-b border-neutral-textMuted/30 pb-1"
              >
                <RotateCcw size={14} />
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PublicationsFilters;