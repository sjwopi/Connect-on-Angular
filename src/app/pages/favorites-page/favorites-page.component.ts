import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';
import { AuthService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  events: IEvent[] = this.eventsService.events
  favorites: number[] = [99, 100]

  constructor(
    public authService: AuthService,
    public eventsService: EventsService
  ) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.favorites = JSON.parse(this.authService.getToken() as string).favorites
    }
    this.eventsService.getAll().pipe().subscribe()
  }
}