import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  currentFile!: File;
  user: User=<User>{};
  //user: User | undefined;


  selectedFiles?: FileList;
  //currentFile?: File;
  message = '';
  errorMsg = '';
  uploadService: any;

  constructor(private apiServe: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiServe.checkSession().subscribe(responseBody => {
      if(!responseBody.data){
        this.router.navigate(["/"]);
      } else {
        console.log(responseBody);
        this.user = responseBody.data;
        console.log("user"+JSON.stringify(this.user));
        console.log(this.user.userId);

      }
    })
  }
  selectedFile(event:any)
  {
    this.currentFile = event.target.files;
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  upload(): void 
  {
    this.errorMsg = '';

    if (this.selectedFiles) 
    {
      const file: File | null = this.selectedFiles.item(0);

      if (file) 
      {
        this.currentFile = file;
        console.log(this.currentFile);
        this.apiServe.upload(this.currentFile,this.user.userId).subscribe(responseBody=>
        {
          console.log(responseBody.data);
        });
      }

    }

    this.router.navigate(['/mypics']);
    
  }

}
