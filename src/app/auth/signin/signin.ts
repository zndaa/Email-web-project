import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Inputt } from "../../shared/inputt/inputt";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signin',
  imports: [Inputt,ReactiveFormsModule,SharedModule,CommonModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

  authForm:FormGroup= new FormGroup({
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
      ])

  });
 constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signin(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.authForm.setErrors({ credentials: true });
        }
      }
    });
  }

}
