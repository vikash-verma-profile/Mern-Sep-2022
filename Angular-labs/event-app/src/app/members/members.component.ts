import { Component, OnInit } from '@angular/core';
import { Event } from '../events/event.model';
import { EventService } from '../services/event.service';

@Component({
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {

  events:Array<Event>=new Array<Event>();
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.getMembers().subscribe(res=>this.events=res,res=>console.log(res));
  }

}
