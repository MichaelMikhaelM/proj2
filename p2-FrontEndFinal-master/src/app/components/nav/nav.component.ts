import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { connect } from 'http2';
import { map, Observable } from 'rxjs';
import { Picture } from 'src/app/models/picture';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //user: User | undefined;
  user: User=<User>{};
  profile_picture: string = "../../../assets/img/default-profile-picture.png";
  username0: Observable<string | null> | undefined;

  session: boolean = false;
  pictureList: Array<any>=[];
  picture:Picture=<Picture>{}
  //user: User | undefined;

  profilePictureCheck = false;

  img='';
  username: string = "";

  userList: Array<any> = [];
  tempList: Array<any> = [];

userResponse: any;

inputString: String= "";

  constructor(private apiServ: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiServ.checkSession().subscribe(responseBody => {
      if(!responseBody.data){
        this.router.navigate(["/"]);
      } else {
        console.log(responseBody);
        this.user = responseBody.data;
        this.session = true;
        this.setProfileImage(this.user.userId)
        this.profilePictureCheck = true;
        console.log(this.user);
        this.username0 = this.route.paramMap.pipe(
          map((params: ParamMap) => params.get(`${this.user?.username}`))
        );
      }
    })
  }

  logout(){
    this.apiServ.logout().subscribe(responseBody => {
      this.router.navigate(["/"]);
    })
  }
  setProfileImage(usrID:number)
  {
    this.apiServ.findProfilePic(this.user.userId).subscribe(responseBody0=>
      {
        console.log("BINGOOOOO"+usrID)
        console.log("resp: "+responseBody0.data);
        this.pictureList=responseBody0.data;
        console.log("picture: "+this.pictureList.length)
        for(let i=0;i<this.pictureList.length;i++)
          {
            this.picture=this.pictureList[i];
            console.log("picture: "+this.picture)
            if(this.picture.profilePicture==true)
              this.img = this.picture.pictureLink;
              console.log("img:  "+this.img);
          }
      })
      

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.tempList = this.userList.filter((user: any) => user.username.includes(this.username))
    console.log(this.tempList)
  }

goToDetails(e: any){
  this.apiServ.usernameSearch = e.target.innerText.toLowerCase();
  this.router.navigate(['/userProfile']);
}
}
