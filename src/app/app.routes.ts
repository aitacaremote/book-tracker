import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'add', loadComponent: () => import('./components/add-book/add-book.component').then(m => m.AddBookComponent) },
  { path: 'list', loadComponent: () => import('./components/book-list/book-list.component').then(m => m.BookListComponent) }
]; 