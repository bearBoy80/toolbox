import type { Tool, Category } from '../types/Tool';

export const categories: Category[] = [
  { id: 'design', name: 'Design', color: 'purple' },
  { id: 'development', name: 'Development', color: 'blue' },
  { id: 'productivity', name: 'Productivity', color: 'green' },
  { id: 'ai', name: 'AI & ML', color: 'orange' },
  { id: 'marketing', name: 'Marketing', color: 'red' },
  { id: 'writing', name: 'Writing', color: 'teal' },
  { id: 'finance', name: 'Finance', color: 'yellow' },
];

export const tools: Tool[] = [
  {
    id: 1,
    name: 'Image Compressor',
    description: 'Compress JPG, PNG, SVG, and GIFs while maintaining quality.',
    category: 'design',
    color: 'purple',
    icon: 'https://img.icons8.com/fluency/96/image.png',
    url: 'https://example.com/image-compressor',
    tags: ['images', 'optimization', 'compression'],
    featured: true
  },
  {
    id: 2,
    name: 'Code Formatter',
    description: 'Beautify and format code in various programming languages.',
    category: 'development',
    color: 'blue',
    icon: 'https://img.icons8.com/fluency/96/code.png',
    url: 'https://example.com/code-formatter',
    tags: ['code', 'formatting', 'development'],
    featured: false
  },
  {
    id: 3,
    name: 'Task Manager',
    description: 'Organize tasks, set priorities, and track progress.',
    category: 'productivity',
    color: 'green',
    icon: 'https://img.icons8.com/fluency/96/tasklist.png',
    url: 'https://example.com/task-manager',
    tags: ['productivity', 'organization', 'tasks'],
    featured: true
  },
  {
    id: 4,
    name: 'AI Text Generator',
    description: 'Generate creative text formats with AI assistance.',
    category: 'ai',
    color: 'orange',
    icon: 'https://img.icons8.com/fluency/96/ai-generated-image.png',
    url: 'https://example.com/ai-text-generator',
    tags: ['ai', 'text', 'generation', 'creative'],
    featured: true
  },
  {
    id: 5,
    name: 'Social Media Planner',
    description: 'Schedule and manage posts across multiple platforms.',
    category: 'marketing',
    color: 'red',
    icon: 'https://img.icons8.com/fluency/96/commercial.png',
    url: 'https://example.com/social-media-planner',
    tags: ['marketing', 'social media', 'scheduling'],
    featured: false
  },
  {
    id: 6,
    name: 'Grammar Checker',
    description: 'Improve writing with advanced grammar and spell check.',
    category: 'writing',
    color: 'teal',
    icon: 'https://img.icons8.com/fluency/96/book.png',
    url: 'https://example.com/grammar-checker',
    tags: ['writing', 'grammar', 'editing'],
    featured: false
  },
  {
    id: 7,
    name: 'Expense Tracker',
    description: 'Track expenses and manage budgets efficiently.',
    category: 'finance',
    color: 'yellow',
    icon: 'https://img.icons8.com/fluency/96/money.png',
    url: 'https://example.com/expense-tracker',
    tags: ['finance', 'budget', 'expenses'],
    featured: false
  },
  {
    id: 8,
    name: 'Color Palette Generator',
    description: 'Create beautiful color schemes for your designs.',
    category: 'design',
    color: 'purple',
    icon: 'https://img.icons8.com/fluency/96/color-palette.png',
    url: 'https://example.com/color-palette',
    tags: ['design', 'colors', 'palette'],
    featured: true
  },
  {
    id: 9,
    name: 'API Tester',
    description: 'Test API endpoints with a user-friendly interface.',
    category: 'development',
    color: 'blue',
    icon: 'https://img.icons8.com/fluency/96/api.png',
    url: 'https://example.com/api-tester',
    tags: ['api', 'testing', 'development'],
    featured: false
  },
  {
    id: 10,
    name: 'Note Taking App',
    description: 'Take notes, organize thoughts, and boost productivity.',
    category: 'productivity',
    color: 'green',
    icon: 'https://img.icons8.com/fluency/96/note.png',
    url: 'https://example.com/note-taking',
    tags: ['notes', 'productivity', 'organization'],
    featured: false
  },
  {
    id: 11,
    name: 'Image Generator',
    description: 'Generate unique images using AI algorithms.',
    category: 'ai',
    color: 'orange',
    icon: 'https://img.icons8.com/fluency/96/picture.png',
    url: 'https://example.com/image-generator',
    tags: ['ai', 'images', 'generation'],
    featured: true
  },
  {
    id: 12,
    name: 'Email Campaign Manager',
    description: 'Create, send, and track email marketing campaigns.',
    category: 'marketing',
    color: 'red',
    icon: 'https://img.icons8.com/fluency/96/gmail.png',
    url: 'https://example.com/email-campaign',
    tags: ['email', 'marketing', 'campaigns'],
    featured: false
  }
];