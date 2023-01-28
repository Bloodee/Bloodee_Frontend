import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

//Sandbox Server
// const AUTH_API = "https://api.sandbox.taweethapisek.ac.th/apps/auth/";

//Real Server
// const AUTH_API = 'https://api.taweethapisek.ac.th/apps/auth/';

//Test Server
const AUTH_API = "http://localhost:8080/api/auth/";

//httpOptions
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  IP_ADDR = '';
  constructor(private http: HttpClient, private token: TokenStorageService) {
    this.ip_addr();
  }

  public getip() {
    return this.http.get('https://api.ipify.org/?format=json');
  }

  ip_addr() {
    this.getip().subscribe((res: any) => {
      this.IP_ADDR = res.ip;
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  signup(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        password,
      },
      httpOptions
    );
  }

}
