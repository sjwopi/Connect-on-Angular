import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {EventsService} from '../../services/events.service'
import { FilterEventsPipe } from 'src/app/pipes/filter-events.pipe';
import { IEvent } from 'src/app/models/event';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  loading = false
  searchInputValue = "";
  checkboxFormat: string = "offlineonline";

  events: IEvent[] = this.eventsService.events

  constructor(
    public eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.loading = true

    this.eventsService.getAll().pipe().subscribe(() => {
      this.loading = false
    })
  }

  changeSearchInput(text: string) {
    this.searchInputValue = text;
    console.log("s")
  }
}
