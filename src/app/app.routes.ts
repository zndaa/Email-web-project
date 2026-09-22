
import { Routes } from '@angular/router';
import { authGuard } from './auth/auth-guard'; 

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'inbox',
    canActivate: [authGuard], 
    loadChildren: () => import('./inbox/inbox-module').then(m => m.InboxModule)
  }
];