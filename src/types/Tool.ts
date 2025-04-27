export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  color: string;
  icon: string;
  url: string;
  tags: string[];
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}