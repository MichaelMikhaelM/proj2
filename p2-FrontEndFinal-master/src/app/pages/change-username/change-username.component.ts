import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {

  current_user:User=<User>{};
  newUsernameInput:string="";

  constructor(private apiServe: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.current_user=responseBody.data;
      console.log(this.current_user);

     
    })
  }

  changeUsername()
  {
    console.log("new password: "+this.newUsernameInput);
    this.apiServe.changeUserInfo(this.current_user.userId,this.newUsernameInput,this.current_user.password,this.current_user.email,this.current_user.firstname,this.current_user.lastname).subscribe(responseBody0=>{
      console.log(responseBody0);
    })
    this.router.navigate(["/"]);

  }
}
