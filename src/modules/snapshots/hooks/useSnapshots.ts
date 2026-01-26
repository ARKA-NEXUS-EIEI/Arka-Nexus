import { useSnapshotsProvider } from "@/core/providers/snapshots.provider";

export function useSnapshots() {
  return useSnapshotsProvider();
}