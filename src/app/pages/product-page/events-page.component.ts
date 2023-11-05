import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service'

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  loading = false
  term = ''
  constructor(
    public eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    
    this.eventsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
