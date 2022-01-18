import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from 'src/app/models/picture';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  user: User=<User>{};
  posts: Post[] = [];
  post: Post=<Post>{};
  profilePic:String = "";
  picture0:Picture=<Picture>{};
  pictureList0: Array<any>=[];

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.user = responseBody.data;
      console.log(this.user);
    this.apiServe.getUsersPosts(this.user.userId).subscribe(responseBody0=>{
      this.posts = responseBody0.data;
      console.log(responseBody0);
      this.apiServe.findProfilePic(this.user.userId).subscribe(responseBody0=>{
        this.pictureList0 = responseBody0.data;
        //console.log("profile picture link: "+this.pictureList0);
        for(let i=0;i<this.pictureList0.length;i++)
        {
          this.picture0 = this.pictureList0[i];
          //console.log("profile picture link: "+this.picture0.pictureLink);
          if(this.picture0.profilePicture==true)
          {
            this.profilePic = this.picture0.pictureLink;
            console.log("profile picture link: "+this.profilePic);
          }
           

        }

      })

      for(let i=0;i<this.posts.length;i++)
      {
        this.post = this.posts[i];
      }
    })
  })

}
}
