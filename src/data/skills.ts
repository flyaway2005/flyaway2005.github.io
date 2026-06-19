import { site } from './site';

export const skillGroups = site.skills;

export const allSkills = site.skills.flatMap((group) => group.items);
