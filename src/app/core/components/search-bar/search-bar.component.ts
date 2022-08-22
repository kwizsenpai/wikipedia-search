import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submittedTerm = new EventEmitter();
  term = '';

  getTermToSearch(enteredText: string): void {
    this.term = enteredText;
  }

  onFormSubmit(ev: any): void {
    ev.preventDefault();
    this.submittedTerm.emit(this.term);
  }
}
