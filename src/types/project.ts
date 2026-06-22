export type ProjectCategory = 'llm' | 'agentic-ai' | 'data-science' | 'other';

export type ProjectType = 'group' | 'personal';

export const projectTypeLabels: Record<ProjectType, string> = {
  group: 'Group Project',
  personal: 'Personal Project',
};

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  projectType: ProjectType;
  context: string;
  summary: string;
  techStack: string[];
  skills: string[];
  featured?: boolean;
  businessContext: string;
  myContribution: string;
  methodology: string;
  keyResults: string;
  takeaway: string;
  reportEmbedId?: string;
  extraLinks?: { title: string; url: string }[];
}
