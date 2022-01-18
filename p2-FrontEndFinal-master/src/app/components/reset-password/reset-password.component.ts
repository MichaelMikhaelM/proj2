import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password: string = "";
  token: string= "";

  constructor(private route: ActivatedRoute, private router: Router, private apiServ: ApiService ) { }

  ngOnInit(): void {
  }

  changePassword(){
    this.apiServ.resetPassword(this.password, this.token).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
