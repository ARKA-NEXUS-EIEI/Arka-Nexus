import type { SanityImageSource } from "@sanity/image-url";

export interface Instrument {
  _id: string;
  title: string;
  intro: string;
  instruments: string[];
  images: SanityImageSource[];
}