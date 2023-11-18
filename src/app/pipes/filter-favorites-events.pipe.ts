import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../models/event';

@Pipe({
  name: 'filterFavoritesEvents'
})
export class FilterFavoritesEventsPipe implements PipeTransform {
  transform(events: IEvent[], ids: number[]): IEvent[] {
    return events.filter(p => {
      let res = false;
      ids.forEach(id => {
        if(p.id == id) {
          res = true;
        }
      })
      return res;
    })
  }
}