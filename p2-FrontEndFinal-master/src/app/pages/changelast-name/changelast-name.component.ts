import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-changelast-name',
  templateUrl: './changelast-name.component.html',
  styleUrls: ['./changelast-name.component.css']
})
export class ChangelastNameComponent implements OnInit {

  current_user:User=<User>{};
  lastInput:string="";

  constructor(private apiServe: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.current_user=responseBody.data;
      console.log(this.current_user);
    })
  }

  changeLastName()
  {
    console.log("new email: "+this.lastInput);
    this.apiServe.changeUserInfo(this.current_user.userId,this.current_user.username,this.current_user.password,this.current_user.email,this.current_user.firstname,this.lastInput).subscribe(responseBody0=>{
      console.log(responseBody0);
    })
    this.router.navigate(["/"]);

  }

}
