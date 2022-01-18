import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input()
  username: string = "";

  tempUser: User | undefined;
  
  userList: Array<any> = [];
  tempList: Array<any> = [];
  
  userResponse: any;
  
  inputString: String= "";
  user: User=<User>{};
  
    constructor(private apiServ: ApiService, private router: Router) { }
  
    ngOnInit(): void {
      this.apiServ.searchUsers().subscribe(list => {
        this.userList = list.data;
        this.tempList = this.userList
     
        console.log(this.tempList)
      })
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.tempList = this.userList.filter((user: any) => user.username.includes(this.username));
        console.log(this.tempList);
        this.user = this.tempList[0];
        console.log("SEARCH: "+this.user);
    }
  
    goToDetails(e: any) {
      let id = e.target.innerText.slice(0,1);
      this.router.navigate([id]);
    }
}
