import type { SanityImageSource } from "@sanity/image-url";

export interface LeadershipMember {
  _id: string;
  name: string;
  photo?: SanityImageSource[];
  role: string;
  description: string;
}

export interface LeadershipStat {
  _id: string;
  number: string;
  label: string;
}

export interface LeadershipTeam {
  _id: string;
  sectionTitle: string;
  sectionIntro: string;
  members: LeadershipMember[];
  stats: LeadershipStat[];
}