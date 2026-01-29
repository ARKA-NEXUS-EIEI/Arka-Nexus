export const publicationsBaseFields = `
  _id,
  title,
  "slug": slug.current,
  type,
  summary,
  domains,
  featured,
  publishedAt,
  "pdfUrl": pdf.asset->url
`;

export const allPublicationsQuery = `
  *[_type == "publication"]
  | order(featured desc, publishedAt desc) {
    ${publicationsBaseFields}
  }
`;

export const publicationsByTypeQuery = (type: "case-study" | "white-paper") => `
  *[_type == "publication" && type == "${type}"]
  | order(featured desc, publishedAt desc) {
    ${publicationsBaseFields}
  }
`;

export const featuredPublicationsQuery = `
  *[_type == "publication" && featured == true]
  | order(publishedAt desc) {
    ${publicationsBaseFields}
  }
`;
