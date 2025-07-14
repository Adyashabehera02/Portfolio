import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'projects', loadComponent: () => import('./projects/projects').then(m => m.Projects) },
  { path: 'resume', loadComponent: () => import('./resume/resume').then(m => m.Resume) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
];
