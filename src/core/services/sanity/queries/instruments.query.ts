export const INSTRUMENTS_QUERY = `
*[_type == "instrumentsPage"][0]{
      title,
      intro,
      instruments,
      images
    }
`;
