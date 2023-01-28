import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Bloodee';
  username: string = '';
  isLogin: boolean = false;
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
  }


  ngOnInit(): void {
    this.username = this.tokenStorage.getUser()
    this.isLogin = this.username != null;
  }

  logout() {
    this.tokenStorage.signOut();
    this.isLogin = false;
    this.router.navigate(['/']);
  }
}
