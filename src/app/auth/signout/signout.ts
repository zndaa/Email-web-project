import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatchPassword } from '../validators/match-password';
import { AuthService } from '../auth';
import { Inputt } from '../../shared/inputt/inputt'; // 🚀 Eğer hata verirse burayı '../../../shared/inputt/inputt' yapabilirsin
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signout',
  imports: [ReactiveFormsModule, Inputt],
  standalone: true, // 🚀 Standalone olduğunu belirttik
  templateUrl: './signout.html',
  styleUrl: './signout.css',
})
export class Signout {
  private matchPassword = inject(MatchPassword);
  private authService = inject(AuthService);
  authForm!: FormGroup;

  constructor() {
    this.authForm = new FormGroup({
      // 🚀 'name' olan kontrol adını 'username' yaptık ki HTML ile birebir eşleşsin!
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9-]+$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])
    }, {
      validators: [this.matchPassword.validate]
    });
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    // 🚀 Form değerlerini güvenli bir şekilde servise gönderiyoruz
    const signupCredentials = {
      username: this.authForm.value.username || '',
      password: this.authForm.value.password || '',
      passwordConfirmation: this.authForm.value.passwordConfirmation || ''
    };

    this.authService.signup(signupCredentials).subscribe({
      next: (response) => {
        // Kayıt başarılı olduğunda yapılacak işlemler (örn: yönlendirme)
      },
      error: (err) => {
        if (!err.status) {
          this.authForm.setErrors({ noConnection: true });
        } else {
          // Sunucudan gelen diğer spesifik hatalar için (örn: username alınmışsa)
          this.authForm.setErrors({ unknownError: true });
        }
      }
    });
  }
}