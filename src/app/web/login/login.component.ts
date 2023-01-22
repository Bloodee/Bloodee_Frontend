import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginFailed = false;
  form: any = {
    username2: '',
    password2: '',
    remember_me2: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
