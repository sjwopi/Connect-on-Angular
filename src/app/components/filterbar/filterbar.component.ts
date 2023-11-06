import { Component } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent {
  public searchInputValue = '';
  
  changeSearchInput(text: string) {
    this.searchInputValue = text;
  }
}
