
import { Component } from '@angular/core';
import { WikipediaService } from './core/services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any[] = [];

  constructor(private wikiService: WikipediaService) {}

  onTerm(term: string): void {
    this.wikiService.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
