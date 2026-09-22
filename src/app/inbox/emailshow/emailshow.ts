import { Component } from '@angular/core';
import { Email } from '../email';
import { ActivatedRoute } from '@angular/router';
import { Emailreply } from '../emailreply/emailreply';

@Component({
  selector: 'app-emailshow',
  imports: [Emailreply],
  templateUrl: './emailshow.html',
  styleUrl: './emailshow.css',
})
export class Emailshow {

email!: Email;

  constructor(private route: ActivatedRoute) {
    this.email = this.route.snapshot.data['email'];
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }





}
