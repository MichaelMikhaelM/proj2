import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-passwordpassword',
  templateUrl: './forgot-passwordpassword.component.html',
  styleUrls: ['./forgot-passwordpassword.component.css']
})
export class ForgotPasswordpasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotToResetPage()
  {
    this.router.navigate(["/resetPassword"]);
  }

}
