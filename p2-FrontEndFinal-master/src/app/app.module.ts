import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginNavComponent } from './components/login-nav/login-nav.component';
import { LoginSlideshowComponent } from './components/login-slideshow/login-slideshow.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { MypicsComponent } from './pages/mypics/mypics.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FeedComponent } from './pages/feed/feed.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordpasswordComponent } from './pages/forgot-passwordpassword/forgot-passwordpassword.component';
import { ResetComponent } from './pages/reset/reset.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchComponent } from './components/search/search.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ChangeUsernameComponent } from './pages/change-username/change-username.component';
import { ChangeEmailComponent } from './pages/change-email/change-email.component';
import { ChangefirstNameComponent } from './pages/changefirst-name/changefirst-name.component';
import { ChangelastNameComponent } from './pages/changelast-name/changelast-name.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
//import { ViewPicturesComponent } from './components/view-pictures/view-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainPageComponent,
    LoginPageComponent,
    LoginNavComponent,
    LoginSlideshowComponent,
    CreateAccountComponent,
    LoginComponent,
    PostComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    UploadImageComponent,
    MypicsComponent,
    CreatePostComponent,
    FeedComponent,
    UserFeedComponent,
    ResetPasswordComponent,
    ForgotPasswordpasswordComponent,
    ResetComponent,
    SearchListComponent,
    SearchComponent,
    ChangePasswordComponent,
    ChangeUsernameComponent,
    ChangeEmailComponent,
    ChangefirstNameComponent,
    ChangelastNameComponent,
    UserProfileComponent,
    //ViewPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
