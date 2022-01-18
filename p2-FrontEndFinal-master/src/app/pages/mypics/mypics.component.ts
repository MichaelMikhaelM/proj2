import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from 'src/app/models/picture';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mypics',
  templateUrl: './mypics.component.html',
  styleUrls: ['./mypics.component.css']
})
export class MypicsComponent implements OnInit {

  user: User=<User>{};
  picture: Picture=<Picture>{}
  userID:number=0;

  picList: Array<any>=[];

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
     console.log(responseBody);
     this.user = responseBody.data;
     this.userID = this.user.userId;
     //console.log("my pic id : "+this.userID);
     this.getAllPics(this.userID);
    })
    //this.getAllPics();
   
  }

  getAllPics(id:number)
  {
    this.apiServe.getAllPicsByUserId(this.userID).subscribe(responseBody=>
      {
        //this.picList=this.responseBody;
        this.picList=responseBody.data;
        console.log(this.picList);
        
      })
  }
  
  setAsProfilePic(id:number) {
    //console.log("piclist:   "+JSON.stringify(this.picList));
    for(let i=0;i<this.picList.length;i++) {
      this.picture = this.picList[i];
      this.apiServe.setPicFalse(this.picture.pictureId).subscribe(
      responseBody=>{
        console.log("id:   "+id);
      })
      this.apiServe.setPicTrue(id).subscribe(responseBody0=>{
        console.log(responseBody0);
      })
    }
  }

  deletePicture(id:number){
    this.apiServe.deletePicture(id).subscribe(responseBody => {
      console.log("deletePicture() invoked");
      this.router.navigate(['mypics']);
      console.log("after route");
    })
  }
}
