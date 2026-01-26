import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

import { sanityConfig } from "../config/sanity.config";

import type { QueryParams } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient(sanityConfig);

/**
 * Image URL builder (Sanity v3 safe)
 */
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Typed Sanity fetch boundary
 * This is the ONLY place sanityClient.fetch is allowed
 */
export async function fetchFromSanity<T>(
  query: string,
  params?: QueryParams,
): Promise<T> {
  if (params) {
    return sanityClient.fetch<T>(query, params);
  }
  return sanityClient.fetch<T>(query);
}
