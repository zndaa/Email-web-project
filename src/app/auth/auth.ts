// 📁 src/app/auth/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}
interface SigninResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  username = '';
  
  // 🚀 Ortak URL'i tek bir yerde tanımlayalım ki kod tekrarı olmasın:
  private rootUrl = 'https://api.angular-email.com';

  // 🚀 Kullanıcının giriş yapıp yapmadığını takip eden modern state tanımımız:
  signedin$ = new BehaviorSubject<boolean | null>(null);

  // 1. Kullanıcı adı uygunluk kontrolü
  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      { username }
    );
  }

  // 2. Kayıt olma (Signup)
signup(credentials: SignupCredentials) {
  return this.http
    .post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
    .pipe(
      // 🚀 Gelen yanıttan username bilgisini yakalıyoruz:
      tap(({ username }) => {
        this.signedin$.next(true); // Giriş durumunu true yap
        this.username = username;   // 🚀 Kullanıcı adını hafızaya kaydet!
      })
    );
}
  

  // 3. Giriş kontrolü (Check Auth)
  checkAuth() {
  return this.http
    .get<SignedinResponse>(`${this.rootUrl}/auth/signedin`)
    .pipe(
      // 🚀 Gelen cevaptan hem authenticated hem de username bilgisini çekiyoruz:
      tap(({ authenticated, username }) => {
        this.signedin$.next(authenticated);
        this.username = username; // 👈 Sayfa yenilense bile kullanıcı adını koruyan sihirli satır!
      })
    );
}

  // 4. Çıkış yapma (Signout)
  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false); // Çıkış yapılınca state false oluyor
      })
    );
  }

  // 5. Giriş yapma (Signin)
  signin(credentials: SigninCredentials) {
  return this.http
    .post<SigninResponse>(`${this.rootUrl}/auth/signin`, credentials)
    .pipe(
      // 🚀 Giriş başarılı olunca kullanıcı adını hafızaya alıyoruz:
      tap(({ username }) => {
        this.signedin$.next(true);
        this.username = username; // 👈 Burası çok kritik!
      })
    );
}
}
