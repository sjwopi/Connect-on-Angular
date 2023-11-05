import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {delay, Observable, retry, tap} from 'rxjs'
import {IEvent} from '../models/event'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(
    private http: HttpClient
  ) {
  }

  events: IEvent[] = []

  getAll(): Observable<IEvent[]> {
    console.log("e")
    return this.http.get<IEvent[]>('http://localhost:3003/events').pipe(
      delay(200),
      retry(2),
      tap(events => {this.events = events; console.log(events)})
    )
  }

  create(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>('http://localhost:3003/events', event)
      .pipe(
        tap(prod => this.events.push(prod))
      )
  }
}
