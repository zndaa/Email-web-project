import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth';
import { Email } from '../email';
import { CommonModule } from '@angular/common';
import { Modal } from '../../shared/modal/modal';
import { Emailform } from '../emailform/emailform';
import { EmailService } from '../email.service';
@Component({
  selector: 'app-emailcreate',
  imports: [CommonModule,Modal,Emailform],
  templateUrl: './emailcreate.html',
  styleUrl: './emailcreate.css',
})
export class Emailcreate {
 showModal = false;
  email: Email;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`
    };
  }

  ngOnInit() {}

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }





}
