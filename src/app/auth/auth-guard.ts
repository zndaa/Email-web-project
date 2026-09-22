
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { take, skipWhile, tap, map } from 'rxjs/operators'; 
import { AuthService } from './auth'; 
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedin$.pipe(
    skipWhile(value => value === null),
    take(1),
   
    map(authenticated => !!authenticated), 
    tap(authenticated => {
      if (!authenticated) {
        router.navigateByUrl('/');
      }
    })
  );
};