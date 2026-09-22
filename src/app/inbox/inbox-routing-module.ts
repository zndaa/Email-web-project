import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Emailshow } from './emailshow/emailshow';
import { Notfound } from './notfound/notfound';
import { EmailResolverService } from './email-resolver.service'; 
import { Placeholder } from './placeholder/placeholder';
const routes: Routes = [
{
    path: '',
    component: Home,
    children: [
      {
        path: 'not-found',
        component: Notfound
      },
      {
        path: ':id',
        component: Emailshow,
        resolve: {
          email: EmailResolverService
        }
      },
      { 
        path: '', 
        component: Placeholder
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
