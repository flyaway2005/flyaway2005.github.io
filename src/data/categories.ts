import type { ProjectCategory } from '../types/project';

export const categoryLabels: Record<ProjectCategory, string> = {
  llm: 'LLM',
  'agentic-ai': 'Agentic AI',
  'data-analytics': 'Data Analytics',
  other: 'Other',
};

export const categoryColors: Record<ProjectCategory, string> = {
  llm: '#7c3aed',
  'agentic-ai': '#6c63ff',
  'data-analytics': '#0d9488',
  other: '#d97706',
};

export const filterOptions: Array<{ value: 'all' | ProjectCategory; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'llm', label: 'LLM' },
  { value: 'agentic-ai', label: 'Agentic AI' },
  { value: 'data-analytics', label: 'Data Analytics' },
  { value: 'other', label: 'Other' },
];
