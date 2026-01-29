import { useMemo, useState } from "react";
import type { Publication } from "../../../core/services/sanity/publications.service";

export const usePublicationFilters = (publications: Publication[]) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<"all" | "case-study" | "white-paper">("all");
  const [domains, setDomains] = useState<string[]>([]);

  const allDomains = useMemo(() => {
    const set = new Set<string>();
    publications.forEach((p) => p.domains?.forEach((d) => set.add(d)));
    return Array.from(set).sort();
  }, [publications]);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        search === "" ||
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.summary.toLowerCase().includes(search.toLowerCase()) ||
        pub.domains?.some((d) =>
          d.toLowerCase().includes(search.toLowerCase())
        );

      const matchesType =
        type === "all" || pub.type === type;

      const matchesDomains =
        domains.length === 0 ||
        domains.every((d) => pub.domains?.includes(d));

      return matchesSearch && matchesType && matchesDomains;
    });
  }, [publications, search, type, domains]);

  return {
    search,
    setSearch,
    type,
    setType,
    domains,
    setDomains,
    allDomains,
    filteredPublications,
    resultsCount: filteredPublications.length,
  };
};
