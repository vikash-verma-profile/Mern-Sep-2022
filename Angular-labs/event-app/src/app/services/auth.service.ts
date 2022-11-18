import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="";
  private _loginUrl="http://localhost:3000/api/login";
  constructor(private http:HttpClient,private _router:Router) { }

  loginUser(user:any){
    return this.http.post<any>(this._loginUrl,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
