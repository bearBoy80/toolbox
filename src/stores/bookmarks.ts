import { writable, derived, get } from 'svelte/store';
import type { Tool } from '../types/Tool';

// 从 localStorage 初始化书签
const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
export const bookmarks = writable<Tool[]>(storedBookmarks);

// 监听变化并保存到 localStorage
bookmarks.subscribe(value => {
  localStorage.setItem('bookmarks', JSON.stringify(value));
});

export function toggleBookmark(tool: Tool) {
  bookmarks.update(items => {
    const exists = items.some(item => item.id === tool.id);
    if (exists) {
      return items.filter(item => item.id !== tool.id);
    } else {
      return [...items, tool];
    }
  });
}

export function isBookmarked(toolId: number): boolean {
  return get(bookmarks).some(item => item.id === toolId);
}