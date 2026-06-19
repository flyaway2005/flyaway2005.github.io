import type { Project } from '../types/project';
import { projects } from './projects';
import { draftProjects } from './projects.draft';
import { publishSettings, type ProjectPublishSettings } from './publish';

const allProjects: Project[] = [...projects, ...draftProjects];

export function getPublishSettings(slug: string): ProjectPublishSettings {
  return publishSettings[slug] ?? { live: false };
}

export function getPublishedProjects(): Project[] {
  return allProjects.filter((project) => publishSettings[project.slug]?.live === true);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = allProjects.find((p) => p.slug === slug);
  if (!project || publishSettings[slug]?.live !== true) return undefined;
  return project;
}

export function getProjectsBySkill(skill: string): Project[] {
  return getPublishedProjects().filter((project) => project.skills.includes(skill));
}

export function isFeaturedOnAbout(project: Project): boolean {
  const settings = getPublishSettings(project.slug);
  return settings.featured ?? project.featured ?? false;
}
