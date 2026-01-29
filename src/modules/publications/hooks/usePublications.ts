import { useEffect, useState } from "react";
import {
  fetchAllPublications,
  fetchPublicationsByType,
  type Publication,
} from "../../../core/services/sanity/publications.service";

interface UsePublicationsOptions {
  type?: "case-study" | "white-paper";
}

export const usePublications = (options?: UsePublicationsOptions) => {
  const [data, setData] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const result = options?.type
          ? await fetchPublicationsByType(options.type)
          : await fetchAllPublications();

        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [options?.type]);

  return { data, loading, error };
};
