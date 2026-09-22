import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module';
import { InboxRoutingModule } from './inbox-routing-module';
import { Home } from './home/home';
import { ReactiveFormsModule } from '@angular/forms';
import { Notfound } from './notfound/notfound';
import { Placeholder } from './placeholder/placeholder';
import { Emailform } from './emailform/emailform';
import { Emailshow } from './emailshow/emailshow';
import { Emailreply } from './emailreply/emailreply';
import { Emailindex } from './emailindex/emailindex';
import { Emailcreate } from './emailcreate/emailcreate';
@NgModule({
  declarations: [],
  imports: [CommonModule,Emailreply,Emailform,Emailindex,Emailshow,Emailcreate,
    Placeholder,Notfound,ReactiveFormsModule
    
    ,InboxRoutingModule,Home,SharedModule],
})
export class InboxModule {
 

}
