import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

//Sandbox Server
// const AUTH_API = "https://api.sandbox.taweethapisek.ac.th/apps/auth/";

//Real Server
const AUTH_API = 'https://api.taweethapisek.ac.th/apps/auth/';

//Test Server
// const AUTH_API = "http://localhost:8081/apps/auth/";

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

  getsemesterdata(): Observable<any> {
    var school_id = '1010720080'; //Taweethapisek School
    return this.http.get(AUTH_API + 'getsemester/' + school_id, httpOptions); //Return year and semester
  }

  getuserdata(academic_year: string, semester: string): Observable<any> {
    const user = this.token.getUser();
    var user_id = user.user_id;
    return this.http.post(
      AUTH_API + 'getuserdata',
      {
        user_id,
        academic_year,
        semester,
      },
      httpOptions
    );
  }
  getstudent(academic_year: string, semester: string, student_id: number): Observable<any> {
    return this.http.post(
      AUTH_API + 'getstudent/' + student_id,
      {
        academic_year,
        semester,
      },
      httpOptions
    )
  }

  login(username: string, password: string): Observable<any> {
    var ip_address = this.IP_ADDR;
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
        ip_address,
      },
      httpOptions
    );
  }

  signinwithgoogle(google_uid: string, google_email: string): Observable<any> {
    var ip_address = this.IP_ADDR;
    return this.http.post(
      AUTH_API + 'signinwithgoogle',
      {
        google_uid,
        google_email,
        ip_address,
      },
      httpOptions
    );
  }
}
