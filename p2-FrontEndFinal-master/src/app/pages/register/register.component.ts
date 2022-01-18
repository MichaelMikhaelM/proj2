import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

        console.log("Firstname: "+this.firstnameInput);
        if(responseBody.data){
          this.router.navigate(["/"]);
        } else {
          this.errMessage = responseBody.message;
        }
      })
  }

}
