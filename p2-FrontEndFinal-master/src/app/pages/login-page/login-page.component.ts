import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.checkSession();
  }

  checkSession(){
    this.apiServe.checkSession().subscribe(responseBody => {
      if(responseBody.data){
        this.router.navigate(["mainpage"]);
      }
    })
  }
}