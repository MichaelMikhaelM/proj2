import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeEmailComponent } from './pages/change-email/change-email.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ChangeUsernameComponent } from './pages/change-username/change-username.component';
import { ChangefirstNameComponent } from './pages/changefirst-name/changefirst-name.component';
import { ChangelastNameComponent } from './pages/changelast-name/changelast-name.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ForgotPasswordpasswordComponent } from './pages/forgot-passwordpassword/forgot-passwordpassword.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MypicsComponent } from './pages/mypics/mypics.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetComponent } from './pages/reset/reset.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  {path: 'mainpage', component: MainPageComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'mypics',component:MypicsComponent},
  {path: 'feed',component:FeedComponent},
  {path:'forgotPassword',component:ForgotPasswordpasswordComponent},
  {path:'resetPassword',component:ResetComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'changeUsername',component:ChangeUsernameComponent},
  {path:'changeEmail',component:ChangeEmailComponent},
  {path:'changeFirst',component:ChangefirstNameComponent},
  {path:'changeLast',component:ChangelastNameComponent},
  {path: ':userid', component: UserProfileComponent},
  {path: '', component: LoginPageComponent},
  /* no valid path, redirect to landing page */
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
