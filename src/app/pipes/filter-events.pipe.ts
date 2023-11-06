import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../models/event';

@Pipe({
  name: 'filterEvents'
})

export class FilterEventsPipe implements PipeTransform {
  transform(events: IEvent[], search: string): IEvent[] {
    if (search.length === 0) return events
    return events.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }
}
