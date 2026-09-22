
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // 🚀 Çekirdek importlar eklendi
import { Email } from '../email';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // 🚀 ReactiveFormsModule eklendi
import { Inputt } from '../../shared/inputt/inputt';
@Component({
  selector: 'app-emailform',
  imports: [ReactiveFormsModule,Inputt], // 🚀 Formları HTML'de kullanabilmek için şart!
  standalone: true,
  templateUrl: './emailform.html',
  styleUrl: './emailform.css',
})
export class Emailform implements OnInit {
  
  // 🚀 TypeScript kızmasın diye değişken isimlerinin yanına (!) ekledik
  emailForm!: FormGroup; 
  @Input() email!: Email; 
  @Output() emailSubmit = new EventEmitter();

  ngOnInit() {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    
    this.emailSubmit.emit(this.emailForm.value);
  }
}