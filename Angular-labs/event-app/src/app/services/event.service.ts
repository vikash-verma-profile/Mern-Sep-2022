import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventUrl='http://localhost:3000/api/events';
  private _memberUrl='http://localhost:3000/api/member';

  constructor(private http:HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventUrl);
  }

  getMembers(){
    return this.http.get<any>(this._memberUrl);
  }
}
