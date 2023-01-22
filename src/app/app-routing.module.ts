import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './web/login/login.component';
import { HomeComponent } from './web/home/home.component';
import { DonorComponent } from './web/donor/donor.component';
import { ProfileEditComponent } from './web/profile/edit/edit.component';
import { BookComponent } from './web/book/book.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donor', component: DonorComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'booking', component: BookComponent },
  { path: 'status', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
