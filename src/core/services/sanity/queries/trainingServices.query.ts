export const trainingServiceQuery = () => `
*[_type == "trainingService" && serviceKey == $serviceKey][0]{
  title,
  description,
  intro,
  "images": images[].asset->url,
  objectives,
  needs,
  keyAreas,
  stages,
  quote
}
`;