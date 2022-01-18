import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {


  current_user:User=<User>{};
  emailInput:string="";

  constructor(private apiServe: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.current_user=responseBody.data;
      console.log(this.current_user);

     
    })
  }

  changeEmail()
  {
    console.log("new email: "+this.emailInput);
    this.apiServe.changeUserInfo(this.current_user.userId,this.current_user.username,this.current_user.password,this.emailInput,this.current_user.firstname,this.current_user.lastname).subscribe(responseBody0=>{
      console.log(responseBody0);
    })
    this.router.navigate(["/"]);

  }
}
