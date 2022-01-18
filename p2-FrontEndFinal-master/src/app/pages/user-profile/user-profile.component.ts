import { HttpResponseBase } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Picture } from 'src/app/models/picture';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: any = 0;
  user: User | undefined
  posts: Array<any> = [];
  pictures: Array<any> = [];
  pictureList: Array<any> = [];
  picture: Picture | undefined;
  profilePic: string = '';

  constructor(private apiServ: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.userId = Number(this.router.url.slice(1,2));
    this.apiServ.getOneUser(this.userId).subscribe(profile => {
      this.user = profile.data;
    })
    this.apiServ.getUsersPosts(this.userId).subscribe(responseBody => {
      this.posts = responseBody.data;
    })
    this.apiServ.findProfilePic(this.userId).subscribe(responseBody1 => {
      this.pictures = responseBody1.data;
      console.log(this.pictures);
      for(let i=0;i<this.pictures.length;i++)
      {
        this.picture = this.pictures[i];
        if(this.picture?.profilePicture == true){
          this.profilePic = this.picture.pictureLink;
          console.log("profile picture link: "+this.profilePic);
        }
      }
    })
  }

}
