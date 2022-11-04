import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:Array<Event>=new Array<Event>();
  constructor(private _eventService:EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(res=>this.events=res,res=>console.log(res));
  }

}
