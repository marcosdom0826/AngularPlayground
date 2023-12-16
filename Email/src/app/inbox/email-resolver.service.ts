import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Email } from './email';
import { EmailService } from './email-service.service';
import { EMPTY, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailService: EmailService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }
}
