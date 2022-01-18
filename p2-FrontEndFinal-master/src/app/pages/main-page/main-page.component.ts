import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from 'src/environments/environment';
import { HttpEventType } from '@angular/common/http';
import { HttpResponse } from 'aws-sdk/global';
import { Picture } from 'src/app/models/picture';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  currentFile!: File;
  user: User=<User>{};
  pictureList: Array<any>=[];
  pictureList0: Array<any>=[];
  picture:Picture=<Picture>{};
  picture0:Picture=<Picture>{}
  //user: User | undefined;

  img='';
  inputString: string= "";

  selectedFiles?: FileList;
  //currentFile?: File;
  message = '';
  errorMsg = '';
  uploadService: any;

  @Input()
  username: string = "";
  
  userList: Array<any> = [];
    tempList: Array<any> = [];
  
  userResponse: any;

  profilePic:String = "";

  

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      if(!responseBody.data){
        this.router.navigate(['/']);
      } else {
        console.log(responseBody);
        this.user = responseBody.data;

        console.log("USER: "+this.user.userId);
      }
    })
  }

  

  
  setProfileImage(usrID:number) {
    this.apiServe.findProfilePic(this.user.userId).subscribe(responseBody0 => {
      console.log("BINGOOOOO"+usrID)
      console.log("resp: "+responseBody0.data);
      this.picture=responseBody0.data
    })
    for(let i=0;i<this.pictureList.length;i++) {
      this.picture=this.pictureList[i];
      if(this.picture.profilePicture==true)
        this.img = this.picture.pictureLink;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tempList = this.userList.filter((user: any) => user.username.includes(this.username))
    console.log(this.tempList)
  }

  goToDetails(e: any) {
    this.apiServe.usernameSearch = e.target.innerText.toLowerCase();
    this.router.navigate(['/userProfile']);
  }
  
}


