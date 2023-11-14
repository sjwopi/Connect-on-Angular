import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../models/event';

@Pipe({
  name: 'filterEventsFormat'
})
export class FilterEventsFormatPipe implements PipeTransform {
  transform(events: IEvent[], form: string[]): IEvent[] {
    if(form[1]) {
      return events;
    }
    return events.filter(p => p.format[0].name.toLowerCase() === form[0])
  }
}
