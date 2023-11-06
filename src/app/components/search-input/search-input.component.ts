import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IInput } from 'src/app/models/input';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input('searchInputValue') value = "";

  @Input() input: IInput = {
    name: "a",
    value: this.value,
    placeholder: "aaa",
    onChange: console.log("a"),
    onSubmit: console.log("aa"),
    withForm: false
  }

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  changeValue() {
    this.change.emit(this.value);
  }
}
