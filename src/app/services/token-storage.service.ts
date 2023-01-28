import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private route: Router) {
    if (!!this.getToken()) {
      var token: any = jwt_decode(this.getToken() || '')
      if (Date.now() > token.exp * 1000) {
        this.signOut();
      }
    }
  }

  public signOut(): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
  }
  public signIn(username: string, token: string): void {
    this.saveToken(token);
    this.saveUser(username);
  }

  public isSignIn(): boolean {
    return !!this.getToken();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: string): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, user);
  }

  public getUser(): any {
    return window.localStorage.getItem(USER_KEY);
  }
}
