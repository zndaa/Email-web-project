import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // 🚀 RouterLinkActive eklendi!
import { CommonModule } from '@angular/common'; 
import { AuthService } from './auth/auth'; 
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, // 🚀 HTML'deki aktif link sınıfı ve seçenekleri için buraya ekledik!
    CommonModule 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  signedin$: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }
}