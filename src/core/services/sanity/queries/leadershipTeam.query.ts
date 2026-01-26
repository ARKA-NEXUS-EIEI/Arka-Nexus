export const LEADERSHIP_TEAM_QUERY = `
*[_type == "leadershipTeam"][0]{
  sectionTitle,
  sectionIntro,
  members[]{
    name,
    role,
    description,
    photo[]
  },
  stats[]{
    number,
    label
  }
}
`;
