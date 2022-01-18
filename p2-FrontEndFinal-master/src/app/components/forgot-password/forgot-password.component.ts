import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = "";
  toggle: boolean = false;

  constructor(private apiServ: ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.apiServ.forgotPassword(this.email).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/resetPassword']);
    this.toggle = true;
  }

}
