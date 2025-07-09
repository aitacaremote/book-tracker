export type BookStatus = 'read' | 'unread';
export interface Book {
  id: string; // timestamp
  title: string;
  author: string;
  status: BookStatus;
} 