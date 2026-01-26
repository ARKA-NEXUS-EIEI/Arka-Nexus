import type { SanityImageSource } from "@sanity/image-url";

export interface SnapshotsDocument {
  _id: string;
  title: string;
  images: SanityImageSource[];
}