import { createClient } from "@sanity/client";
import { sanityConfig, sanityWriteConfig } from "../config/sanity.config";
import { createImageUrlBuilder } from "@sanity/image-url";

export const sanityClient = createClient(sanityConfig);
export const sanityWriteClient = createClient(sanityWriteConfig);

const builder = createImageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}
