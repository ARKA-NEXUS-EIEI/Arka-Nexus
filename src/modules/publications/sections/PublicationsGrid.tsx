import { FileText, Download, Star } from "lucide-react";
import type { Publication } from "../../../core/services/sanity/publications.service";

interface PublicationsGridProps {
  publications: Publication[];
  loading?: boolean;
}

const PublicationsGrid = ({
  publications,
  loading = false,
}: PublicationsGridProps) => {

  const downloadPDF = async (pdfUrl: string, fileName: string) => {
    try {
      if (!pdfUrl) return;

      // 2. Fetch the file data
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      // 3. Create a local URL for the blob object
      const url = window.URL.createObjectURL(blob);

      // 4. Trigger the download using a temporary link
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();

      // 5. Cleanup: remove link and revoke the object URL to save memory
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: Just open in a new tab if the fetch fails
      window.open(pdfUrl, "_blank");
    }
  };

  if (loading) {
    return (
      <section className="mx-auto max-w-arka px-safe-x py-section-y">
        <div className="grid gap-grid-gap md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[260px] animate-pulse rounded-card border border-border bg-card"
            />
          ))}
        </div>
      </section>
    );
  }

  if (!publications.length) {
    return (
      <section className="mx-auto max-w-arka px-safe-x py-section-y text-center">
        <p className="text-body text-muted-foreground">
          No publications available at the moment.
        </p>
      </section>
    );
  }

  function openPreview(pdfUrl: string) {
    const width = Math.min(window.innerWidth * 0.85, 1200);
    const height = Math.min(window.innerHeight * 0.85, 900);
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      pdfUrl,
      "PDF Preview",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`,
    );
  }

  return (
    <section className="mx-auto max-w-arka px-safe-x pb-section-y">
      <div className="flex flex-wrap justify-center gap-grid-gap">
        {publications.map((pub) => (
          <article
            key={pub._id}
            className="group relative flex flex-col rounded-card border border-border bg-card p-card-gap shadow-card transition-all duration-300 hover:border-brand-primary/60 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[420px]"
          >
            {/* Featured badge */}
            {pub.featured && (
              <div className="absolute right-4 top-4 flex items-center gap-1 text-body-sm font-semibold text-brand-primary">
                <Star className="h-4 w-4 fill-brand-primary" />
                Featured
              </div>
            )}

            {/* Header */}
            <div className="mb-stack-gap flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-brand-primary/10">
                <FileText className="h-6 w-6 text-brand-primary" />
              </div>

              <div>
                <p className="text-body-sm uppercase tracking-wider text-muted-foreground">
                  {pub.type === "case-study" ? "Case Study" : "White Paper"}
                </p>
                <h3 className="text-h4 font-semibold leading-snug">
                  {pub.title}
                </h3>
              </div>
            </div>

            {/* Summary */}
            <p className="mb-content-gap text-body-sm leading-relaxed text-muted-foreground">
              {pub.summary}
            </p>

            {/* Domains */}
            {pub.domains?.length ? (
              <div className="mb-content-gap flex flex-wrap gap-2">
                {pub.domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-button bg-brand-primary/10 px-3 py-1.5 text-body-sm font-medium text-brand-primary"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Actions */}
            <div className="mt-auto flex gap-3">
              {/* Preview */}
              <button
                type="button"
                onClick={() => {
                  openPreview(pub.pdfUrl);
                }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-button bg-brand-primary px-4 py-2 font-medium text-white transition-all hover:bg-brand-secondary"
              >
                <FileText className="h-4 w-4" />
                View PDF
              </button>
              {/* Download */}
              <button
                type="button"
                onClick={() => {
                  downloadPDF(pub.pdfUrl, pub.title);
                }}
                className="inline-flex items-center justify-center rounded-button border border-border px-3 transition-colors hover:bg-secondary"
                title="Download PDF"
              >
                <Download className="h-5 w-5 text-brand-primary" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PublicationsGrid;
