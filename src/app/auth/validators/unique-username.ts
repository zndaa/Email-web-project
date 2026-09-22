import { Injectable, inject } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms'; // 🚀 AbstractControl ve ValidationErrors eklendi
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { AuthService } from '../auth'; 


@Injectable({
  providedIn: 'root'
})

export class UniqueUsername {

private authService = inject(AuthService);

  // 🚀 AbstractControl tipiyle strict mod hatasını çözdük
  validate = (control: AbstractControl): Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.authService.usernameAvailable(value).pipe(
      map(res => {
        // 🚀 Eğer kullanıcı adı uygunsa (available: true) hata yok (null dön)
        if (res.available) {
          return null;
        }
        // 🚀 Uygun değilse hatayı dön (Strict mod uyarısı çözüldü)
        return { nonUniqueUsername: true };
      }),
      catchError(err => {
        if (err.error && err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };


}
