import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent {
  searchInputValue: string = '';
  checkboxOnline: boolean = false;
  checkboxOffline: boolean = false;


  
  @Output()
  changeInputValue: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  changeCheckboxOnlineValue: EventEmitter<boolean[]> = new EventEmitter<boolean[]>();


  changeValueInput() {
    this.changeInputValue.emit(this.searchInputValue);
  }
  changeValueCheckboxOnline() {
    this.checkboxOnline = !this.checkboxOnline;
    this.changeCheckboxOnlineValue.emit([this.checkboxOnline, this.checkboxOffline])
  }
  changeValueCheckboxOffline() {
    this.checkboxOffline = !this.checkboxOffline;
    this.changeCheckboxOnlineValue.emit([this.checkboxOnline, this.checkboxOffline])
  }
}