import { Component ,Input} from '@angular/core';
import { EmailService } from '../email.service';
import { Email} from '../email';
import { Modal } from '../../shared/modal/modal';
import { Emailform } from '../emailform/emailform';
@Component({
  selector: 'app-emailreply',
  imports: [Modal,Emailform],
  templateUrl: './emailreply.html',
  styleUrl: './emailreply.css',
})
export class Emailreply {

showModal = false;
  @Input() email!: Email;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    const text = this.email.text.replace(/\n/gi, '\n> ');

    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n-------- ${this.email.from} wrote:\n> ${text}`
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }







}
