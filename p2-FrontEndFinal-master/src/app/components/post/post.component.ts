import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Picture } from 'src/app/models/picture';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('type') profile: number | undefined;

  posts: Post[] = [];
  picture: Picture=<Picture>{};
  user0: User=<User>{};
  current_user:User=<User>{};
  post: Post=<Post>{}
  postList: Array<any>=[];
  pictureList0: Array<any>=[];
  picture0:Picture=<Picture>{};
  profilePic:String = "";
  profPicArr:string[]=[];

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody0 => {
      this.current_user=responseBody0.data;
    })

    this.getAllPosts(0);
  }

  getAllPosts(page: number)
  {
    this.apiServe.getAllPosts(page).subscribe(responseBody => {
      //console.log("response: "+responseBody.data);
      this.postList = responseBody.data;

      //console.log(this.postList[0])
      for(let i=0;i<this.postList.length;i++)
      {
        this.post=this.postList[i];
        this.posts[i] = this.post;

        this.apiServe.usersProfilePic(this.posts[i].user.userId).subscribe(responseBody0=>{
          this.picture=responseBody0.data;
          this.profPicArr[i] = this.picture.pictureLink;
          this.posts[i].user.picture=this.picture.pictureLink;
          //this.posts[i].user.pictures=this.picture;
          console.log("ARRAY: "+ this.picture.pictureLink);
        })
        console.log("userID: "+this.post.user.userId);
        
        console.log(this.post);
        console.log(this.post.user.username);
        console.log("imageLink: "+this.post.pictureLink)
      }
      //this.post = this.posts
      //this.user.username=this.posts.
    })
  }

  turnPage(page: number){
    this.apiServe.getAllPosts(page).subscribe(responseBody => {
      this.posts = responseBody.data;
    })
  }

  deletePost(postId: number){
    this.apiServe.deletePost(postId).subscribe(responseBody => {
      this.posts = this.posts.filter(p => p.postId !== postId)
    })
  }


}
