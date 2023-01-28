import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './web/login/login.component';
import { HomeComponent } from './web/home/home.component';
import { DonorComponent } from './web/donor/donor.component';
import { ProfileEditComponent } from './web/profile/edit/edit.component';
import { BookComponent } from './web/book/book.component';
import { StatusComponent } from './web/status/status.component';
import { RegisterComponent } from './web/register/register.component';
import { QueqComponent } from './web/queq/queq.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'donor', component: DonorComponent },
  { path: 'que', component: QueqComponent },
  { path: 'profile/edit', component: ProfileEditComponent },
  { path: 'booking', component: BookComponent },
  { path: 'status', component: StatusComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
