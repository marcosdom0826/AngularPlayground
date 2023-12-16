import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupCredentials } from './signup/signup-credentials';
import { BehaviorSubject, catchError, map, tap } from 'rxjs';
import { SigninCredentials } from './signin/signin-credentials';
import { createFind } from 'rxjs/internal/operators/find';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupResponse {
  username: string;

}
interface SigninResponse {
  authenticated: boolean;
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject<null | boolean>(null);
  username = '';
  constructor(private httpClient: HttpClient) { }

  usernameAvailable(username: string) {
    return this.httpClient.post<UsernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
      'username': username
    })
  }
  signup(credentials: SignupCredentials) {
    return this.httpClient
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`,
        credentials).pipe(
          tap((response) => {
            this.username = response.username;
            this.signedin$.next(true)
          })
        );
  }
  signin(credentials: SigninCredentials) {
    return this.httpClient.post<SigninResponse>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap((response) => {
          this.username = response.username;
          this.signedin$.next(true);
        })
      )
  }
  signout() {
    return this.httpClient.post(`${this.rootUrl}/auth/signout`, {}).pipe(map(() => {
      this.signedin$.next(false);
    }));
  }
  checkAuth() {
    return this.httpClient.get<SigninResponse>(`${this.rootUrl}/auth/signedin`).pipe(
      tap(({ authenticated, username }) => {
        this.signedin$.next(authenticated);
        this.username = username;
      })
    );
  }

}
