import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  current_user:User=<User>{};
  newPasswordInput:string="";


  constructor(private apiServe: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.current_user=responseBody.data;
      console.log(this.current_user);

     
    })
  }

  changePassword()
  {
    console.log("new password: "+this.newPasswordInput);
    this.apiServe.changeUserInfo(this.current_user.userId,this.current_user.username,this.newPasswordInput,this.current_user.email,this.current_user.firstname,this.current_user.lastname).subscribe(responseBody0=>{
      console.log(responseBody0);
    })
    this.router.navigate(["/"]);

  }

}
