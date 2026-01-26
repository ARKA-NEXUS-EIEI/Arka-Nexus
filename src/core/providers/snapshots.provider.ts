import { useEffect, useState } from "react";

import { getSnapshotsPage } from "../services/sanity/services/snapshots.service";

import type { SnapshotsDocument } from "../services/sanity/types/snapshots.types";

export interface MasonryImage {
  id: string;
  image: string;
  height: number;
}

export interface SnapshotsViewModel {
  title: string;
  images: MasonryImage[];
}

export function useSnapshotsProvider() {
  const [data, setData] = useState<SnapshotsViewModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    void (async () => {
      try {
        const res: SnapshotsDocument = await getSnapshotsPage();
        if (!mounted) return;

        // ✅ INSERT HERE
        const imagesWithHeight: MasonryImage[] = res.images.map(
          (img, index) => ({
            id: img._key,
            image: img.url,
            height: 300 + (index % 5) * 120,
          }),
        );

        setData({
          title: res.title,
          images: imagesWithHeight,
        });
      } catch (e) {
        if (mounted) setError(e as Error);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}
