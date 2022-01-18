import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  errMessage: string = "";
  usernameInput: string = "";
  passwordInput: string = "";
  emailInput: string = "";
  firstnameInput: string = "";
  lastnameInput: string = "";

  constructor(private apiServ: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount(){
    this.apiServ.register(this.usernameInput, this.passwordInput, this.emailInput, this.firstnameInput, this.lastnameInput)
      .subscribe(responseBody => {
        console.log(responseBody);

        if(responseBody.data){
          this.router.navigate(["/"]);
        } else {
          this.errMessage = responseBody.message;
        }
      })
  }

}
