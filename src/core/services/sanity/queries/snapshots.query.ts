export const SNAPSHOTS_QUERY = `
    *[_type == "snapshotsPage"][0]{
        _id,
        title,
        images[]
        }
    `;
