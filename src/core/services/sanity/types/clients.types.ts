import type { SanityImageSource } from "@sanity/image-url";

export interface ClientLogo {
  _id: string;
  count: number;
  title: string;
  topRowLogos: SanityImageSource[];
  bottomRowLogos: SanityImageSource[];
}