import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Signout } from './signout/signout';
import { Signup } from './signup/signup';
const routes: Routes = [
  {
    path:'signup', component:Signup
  },
  {
    path:'', component:Signin
  },{
    path:'signout', component:Signout 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
