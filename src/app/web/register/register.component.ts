import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoginFailed = false;
  errorMessage = '';
  form: {
    username: string,
    password: string,
    repassword: string,
  } = {
      username: '',
      password: '',
      repassword: '',
    };
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitRegister() {
    if (this.form.password != this.form.repassword) {
      this.errorMessage = "รหัสผ่านไม่ตรงกัน";
    } else {
      this.authService.signup(this.form.username, this.form.password).subscribe({
        next: (data) => {
          console.log(data);
          if (data.status) {
            this.router.navigate(['/']);
          } else {
            this.isLoginFailed = true;
            this.errorMessage = data.message;
          }
        },
        error: (err) => {
          this.isLoginFailed = true;
        }
      });
    }
  }
  checkPassword(pass :string, repass:string){
    if(pass != repass){
      this.isLoginFailed = true;
      this.errorMessage = "รหัสผ่านไม่ตรงกัน";
    }else{
      this.isLoginFailed = false;
      this.errorMessage = "";
    }
  }
}
