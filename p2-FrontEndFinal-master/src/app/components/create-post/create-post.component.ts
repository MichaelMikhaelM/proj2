import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Picture } from 'src/app/models/picture';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postInput: string="";
  user: User=<User>{};
  currentFile!: File;
  posts: Post[] = [];
  post: Post=<Post>{};
  profilePic:String = "";
  picture0:Picture=<Picture>{};
  pictureList0: Array<any>=[];


  selectedFiles?: FileList;
  //currentFile?: File;
  message = '';
  errorMsg = '';
  uploadService: any;
  img = '';

  // helper
  toggle = false;

  constructor(private apiServe: ApiService, router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      this.user = responseBody.data;
      console.log(this.user);
    this.apiServe.getUsersPosts(this.user.userId).subscribe(responseBody0=>{
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

      for(let i=0;i<this.posts.length;i++) {
        this.post = this.posts[i];
      }
    })
  })


  }

  selectedFile(event:any) {
    this.currentFile = event.target.files;
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log("selected files: "+this.selectedFiles);
  }


  uploadPost() {
    this.errorMsg = '';

    if (this.selectedFiles) 
    {
      console.log("file found");

      const file: File | null = this.selectedFiles.item(0);

      if (file) 
      {
        this.currentFile = file;
        console.log(this.currentFile);
        this.apiServe.upload(this.currentFile,this.user.userId).subscribe(responseBody=>
        {
          this.img = responseBody.data;
          console.log(responseBody.data);
          this.apiServe.createPost(this.postInput,this.user,this.img).subscribe(responseBody0=>
            {
              console.log(responseBody0)
              this.posts.push(responseBody0.data);
            })
          });
        }
  
      }
      //if(this.selectedFile==null)
      else
      {console.log("no picture")
        this.apiServe.createPost(this.postInput,this.user,"").subscribe(responseBody0=>
          {
            console.log(responseBody0);
            this.posts.push(responseBody0.data)
          })
      }
  
      this.postInput = "";
      this.toggle = true;
  }
  

}
