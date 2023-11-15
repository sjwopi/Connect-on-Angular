import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../models/event';

@Pipe({
  name: 'filterEventsFormat'
})
export class FilterEventsFormatPipe implements PipeTransform {
  transform(events: IEvent[], form:boolean[]): IEvent[] {
    if (form[0] && !form[1]) {
      return events.filter(p => p.format[0].name.toLowerCase() === 'online')
    } else if (!form[0] && form[1]) {
      return events.filter(p => p.format[0].name.toLowerCase() === 'offline')
    }
    return events
  }
}
