export const auditServiceQuery = () => `
*[_type == "auditService" && serviceKey == $serviceKey][0]{
  title,
  description,
  "images": images[].asset->url,
  "auditImages": auditImages[].asset->url,
  steps,
  keySteps,
  benefits
}
`;