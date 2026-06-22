import type { ProjectCategory } from '../types/project';

export const categoryLabels: Record<ProjectCategory, string> = {
  llm: 'LLM',
  'agentic-ai': 'Agentic AI',
  'data-science': 'Data Science',
  other: 'Other',
};

export const categoryColors: Record<ProjectCategory, string> = {
  llm: '#7c3aed',
  'agentic-ai': '#4f46e5',
  'data-science': '#0d9488',
  other: '#d97706',
};

export const filterOptions: Array<{ value: 'all' | ProjectCategory; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'llm', label: 'LLM' },
  { value: 'agentic-ai', label: 'Agentic AI' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'other', label: 'Other' },
];
