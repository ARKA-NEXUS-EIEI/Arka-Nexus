export const trainingServiceQuery = (type: string) => `
*[_type == "${type}"][0]{
  title,
  description,
  intro,
  images[],
  stages[],
  keyAreas[],
  needs[],
  objectives[],
  stages[],
  quote,
}
`;
