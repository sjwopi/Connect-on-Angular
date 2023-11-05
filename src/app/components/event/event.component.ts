import { Component, Input, OnInit } from '@angular/core'
import { IEvent } from 'src/app/models/event'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() event: IEvent = {
    id: 121,
    title: "test3",
    description: "test3",
    url: "https://www.basealt.ru/conference/ezhegodnaja-konferencija-razrabotchikov-svobodnykh-programm",
    image: "http://it.acceleratorpracticum.ru/media/events/image/30af75a2-732b-4ec8-b45b-3fb754af8a41.jpg",
    image_small: "http://it.acceleratorpracticum.ru/media/events/image/fd718aac-aff6-4abf-89c4-2bee6e6e2c1c.png",
    program: "test1",
    organizer: "COMPANY",
    partners: "test1",
    address: "test1",
    price: "990000.00",
    date_start: "2023-08-28T10:00:00Z",
    date_end: "2023-08-29T18:00:00Z",
    created_at: "2023-07-24T11:27:52.446199Z",
    city: "test1",
    isLiked: false,
    tags: [
      {
        id: 2,
        name: "C++",
        slug: "c-plus-plus"
      },
      {
        id: 3,
        name: "Docker",
        slug: "docker"
      },
      {
        id: 1,
        name: "Python",
        slug: "python"
      }
    ],
    topic: [
      {
        id: 43,
        name: "QA",
        slug: "qa"
      }
    ],
    format: [
      {
        id: 2,
        name: "Offline",
        slug: "offline"
      }
    ]
  }
}
