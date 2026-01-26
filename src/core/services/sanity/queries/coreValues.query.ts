export const CORE_VALUES_QUERY = `
  *[_type == "coreValues"][0]{
    values[]{
      title,
      description
    }
  }
`;
