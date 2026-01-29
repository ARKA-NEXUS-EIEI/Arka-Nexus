export const serviceRegistryQuery = `
*[_type == "serviceRegistry" && enabled == true]
| order(order asc) {
  title,
  serviceKey,
  "slug": slug.current,
  template,
  order
}
`
