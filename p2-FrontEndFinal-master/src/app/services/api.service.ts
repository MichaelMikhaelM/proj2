import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { first, Observable } from 'rxjs';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { HttpRequest } from 'aws-sdk/global';
import { User } from '../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  domain: string = "http://localhost:9000";
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

   current = new Date();
   usernameSearch: string = "";


  constructor(private httpCli: HttpClient) { }

  register(username: string, password: string, email: string, firstname: string, lastname: string){
    return this.httpCli.post<any>("http://localhost:9000/user", {

      "username": username,
      "password": password,
      "email": email,
      "firstname": firstname,
      "lastname": lastname
    })
  }

  login(username: string, password: string): Observable<any> {
    //return this.httpCli.post<any>("http://localhost:9000/session", {
    return this.httpCli.post<any>(`${this.domain}/session`, {  
      "username" : username,
      "password" : password
    }, {
      withCredentials: true
    })
  }

  checkSession(){
    //return this.httpCli.get<any>(`http://localhost:9000/session`, {
      return this.httpCli.get<any>(`${this.domain}/session`, {
      withCredentials: true
    })
  }

  logout(){
    //return this.httpCli.delete<any>(`http://localhost:9000/session`, {
    return this.httpCli.delete<any>(`${this.domain}/session`, {  
      withCredentials: true
    })
  }

  getAllPosts(page: number){
    return this.httpCli.get<any>(`${this.domain}/pageable/${page}`);
  }

  getUsersPosts(userId: number){
    return this.httpCli.get<any>(`${this.domain}/post/user/${userId}`);
  }

  upload(file: File,userId:number) 
  {
//upload(file: File,user:User): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', this.myForm.get('fileSource')?.value);
  formData.append('file', file);

  console.log(userId);
  //return this.httpCli.post<any>(`http://localhost:9000/picture/${userId}/file`, formData,{
  return this.httpCli.post<any>(`${this.domain}/picture/${userId}/file`, formData,{  
    reportProgress: true,
    
  })
 
  }

  getAllPicsByUserId(userId:number)
  {
    console.log("ID: "+userId);
    //console.log("api: "+this.httpCli.get<any>(`http://localhost:9000/picture/user/${userId}`))
    //return this.httpCli.get<any>(`http://localhost:9000/picture/user/${userId}`,{
    return this.httpCli.get<any>(`${this.domain}/picture/user/${userId}`,{  
      withCredentials: true
    })
    
  }

  setPicFalse(picID:number)
  {
    //return this.httpCli.put<any>(`http://localhost:9000/picture/false/${picID}`,{'Access-Control-Allow-Origin': '*'})
    return this.httpCli.put<any>(`${this.domain}/picture/false/${picID}`,{'Access-Control-Allow-Origin': '*'})
  }
  setPicTrue(picID:number)
  {
    //return this.httpCli.put<any>(`http://localhost:9000/picture/true/${picID}`,{ 'Access-Control-Allow-Origin': '*'})
    return this.httpCli.put<any>(`${this.domain}/picture/true/${picID}`,{ 'Access-Control-Allow-Origin': '*'})
  }

  findProfilePic(userid:number)
  {
    console.log(userid);
    //return this.httpCli.get<any>(`http://localhost:9000/picture/user/${userid}`)
    return this.httpCli.get<any>(`${this.domain}/picture/user/${userid}`)
  }
  usersProfilePic(userid:number)
  {
    console.log(userid);
    //return this.httpCli.get<any>(`http://localhost:9000/picture/profilePic/user/${userid}`)
    return this.httpCli.get<any>(`${this.domain}/picture/profilePic/user/${userid}`)
  }
   
  createPost(content:string, user:User,pictureLink:string)
  {
    //return this.httpCli.post<any>(`http://localhost:9000/post`,
    return this.httpCli.post<any>(`${this.domain}/post`,
    {
      "content":content,
      "user":user,
      "pictureLink":pictureLink,
      "submitted": this.current.getTime()
    })
  }

  getUserByUsername(username: string){
    return this.httpCli.get<any>(`${this.domain}/user/${username}`);
  }

  forgotPassword(email: string){
    //return this.httpCli.post<any>("http://localhost:9000/forgotPassword", {
    return this.httpCli.post<any>(`${this.domain}/forgotPassword`, {  
      "email":email
    })
  }
  resetPassword(password: string, token: string){
    //return this.httpCli.post<any>("http://localhost:9000/resetPassword", {
    return this.httpCli.post<any>(`${this.domain}/resetPassword`, {  
      "password":password,
      "resetPasswordToken": token
    })
  }


  searchUsers(){
  return this.httpCli.get<any>(`${this.domain}/user`)
}

  getOneUser(userId: number){
    return this.httpCli.get<any>(`${this.domain}/user/${userId}`)
  }

  changeUserInfo(id:number,username:string,password:string,email:string,firstname:string,lastName:string)
  {
    console.log("id: "+id)
    return this.httpCli.put<any>(`${this.domain}/user`,{
      "userId":id,
      "username":username,
      "password":password,
      "email": email,
      "firstname":firstname,
      "lastname":lastName
    })
  }

  deletePicture(pictureId:number){
    return this.httpCli.delete<any>(`${this.domain}/picture/${pictureId}`);
  }

  deletePost(postId: number){
    return this.httpCli.delete<any>(`${this.domain}/post/${postId}`);
  }

}
