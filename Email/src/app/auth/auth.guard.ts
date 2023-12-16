import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { CanActivateFn, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { skipWhile, take, tap } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedin$.pipe(
    skipWhile((value) => value === null),
    take(1),
    tap(
      (authenticated) => {
        if (!authenticated) {
          router.navigateByUrl('/');
        }
      }
    )
  ) as Observable<boolean | UrlTree>;
};
