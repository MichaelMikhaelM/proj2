import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-changefirst-name',
  templateUrl: './changefirst-name.component.html',
  styleUrls: ['./changefirst-name.component.css']
})
export class ChangefirstNameComponent implements OnInit {

  current_user:User=<User>{};
  firstInput:string="";

  constructor(private apiServe: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.current_user=responseBody.data;
      console.log(this.current_user);
    })
  }

  changeFirstName()
  {
    console.log("new email: "+this.firstInput);
    this.apiServe.changeUserInfo(this.current_user.userId,this.current_user.username,this.current_user.password,this.current_user.email,this.firstInput,this.current_user.lastname).subscribe(responseBody0=>{
      console.log(responseBody0);
    })
    this.router.navigate(["/"]);

  }
}
