export const auditServiceQuery = (type: string) => `
*[_type == "${type}"][0]{
  title,
  description,
  images[],
  auditImages[],
  steps[],
  keySteps[],
  benefits[]
}
`;
