import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent {
  searchInputValue = '';
  
  @Output()
  changeInputValue: EventEmitter<string> = new EventEmitter<string>();


  changeValue() {
    this.changeInputValue.emit(this.searchInputValue);
  }
  
}