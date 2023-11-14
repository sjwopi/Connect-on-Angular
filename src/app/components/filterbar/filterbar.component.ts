import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit{
  ngOnInit(): void {
    this.changeValueCheckboxOnline()
  }
  searchInputValue = '';
  checkboxFormats:string[] = [];


  
  @Output()
  changeInputValue: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  changeCheckboxOnlineValue: EventEmitter<string[]> = new EventEmitter<string[]>();


  changeValueInput() {
    this.changeInputValue.emit(this.searchInputValue);
  }
  changeValueCheckboxOnline() {
    if(this.checkboxFormats) this.checkboxFormats.push("online")
  }
}