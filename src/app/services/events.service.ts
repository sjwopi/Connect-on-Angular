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
    return this.http.get<IEvent[]>('http://localhost:3000/events').pipe(
      delay(304),
      retry(2),
      tap(events => this.events = events)
    )
  }
}
