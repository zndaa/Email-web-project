import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { EmailService } from '../email.service';
import { Email } from '../email'; 
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-emailindex',
  imports: [RouterLink,CommonModule],
  templateUrl: './emailindex.html',
  styleUrl: './emailindex.css',
})
export class Emailindex implements OnInit {
  emails: Email[] = []; 

  constructor(private emailService: EmailService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.emailService.getEmails().subscribe((emailList) => {
      console.log('Servisten gelen ham veri:', emailList);
      this.emails = emailList as Email[]; 


      this.cdr.detectChanges();
    });
  }
}