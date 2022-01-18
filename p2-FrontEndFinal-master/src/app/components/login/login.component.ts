import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMessage: string = "";
  usernameInput: string = "";
  passwordInput: string = "";

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.apiServe.login(this.usernameInput, this.passwordInput).subscribe(responseBody => {
      console.log(responseBody);
      if(responseBody.data){
        this.router.navigate(["mainpage"]);
      } else {
        this.errMessage = responseBody.message;
      }
    })
  }

}
