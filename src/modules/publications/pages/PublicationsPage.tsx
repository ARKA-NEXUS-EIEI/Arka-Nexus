import { publicationsContent } from "../content/publications.content";
import { usePublications } from "../hooks/usePublications";
import PublicationsGrid from "../sections/PublicationsGrid";
import PublicationsFilters from "../sections/PublicationsFilter";
import { usePublicationFilters } from "../hooks/usePublicationFilters";

const PublicationsPage = () => {
  const { data, loading } = usePublications();
  const filters = usePublicationFilters(data);

  return (
    <div className="min-h-screen mt-nav-h bg-background text-foreground">
      <section className="py-section-y px-safe-x max-w-arka mx-auto text-center">
        <h1 className="text-h1 mb-stack-gap text-brand-primary">{publicationsContent.title}</h1>
        <p className="text-body text-muted-foreground mx-auto text-justify max-w-5xl">
          {publicationsContent.description}
        </p>
      </section>

      <PublicationsFilters {...filters} />
      <PublicationsGrid publications={filters.filteredPublications} loading={loading} />
    </div>
  );
};

export default PublicationsPage;
