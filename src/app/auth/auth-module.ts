import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';



import { AuthRoutingModule } from './auth-routing-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule,ReactiveFormsModule,SharedModule],
})
export class AuthModule {
  
}
