import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(private _auth:AuthService,private _router:Router) {
   

  }
  title = 'event-app';

  LoggedIn(Input:boolean):boolean{
    if(Input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }

  Logout(){
    this._auth.logoutUser();
  }
}
