import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  events: IEvent[] = this.eventsService.events
  favorites: number[] = [99, 100]

  constructor(
    public eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.eventsService.getAll().pipe().subscribe()
  }
}
