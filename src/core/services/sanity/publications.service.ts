import { sanityClient } from "../client";
import {
  allPublicationsQuery,
  publicationsByTypeQuery,
  featuredPublicationsQuery,
} from "./queries/publications.query";

export interface Publication {
  _id: string;
  title: string;
  slug: string;
  type: "case-study" | "white-paper";
  summary: string;
  domains?: string[];
  featured: boolean;
  publishedAt: string;
  pdfUrl: string;
}

export const fetchAllPublications = async (): Promise<Publication[]> => {
  return sanityClient.fetch(allPublicationsQuery);
};

export const fetchPublicationsByType = async (
  type: "case-study" | "white-paper"
): Promise<Publication[]> => {
  return sanityClient.fetch(publicationsByTypeQuery(type));
};

export const fetchFeaturedPublications = async (): Promise<Publication[]> => {
  return sanityClient.fetch(featuredPublicationsQuery);
};
