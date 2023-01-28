import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginFailed = false;
  form: {
    username: string,
    password: string,
  } = {
      username: '',
      password: '',
    };
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    this.authService.login(this.form.username, this.form.password).subscribe({
      next: (data) => {
        console.log(data);
        if (data.status) {
          this.tokenStorage.signIn(
            data.username,
            data.accessToken
          )
          this.router.navigate(['/']);
        } else {
          this.isLoginFailed = true;
        }
      },
      error: (err) => {
        this.isLoginFailed = true;
      }
    });
  }
}
