import { Observable, map } from 'rxjs';
import {
  WikipediaResponse,
  WikipediaSearch,
} from '../models/searchlist.interface';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  url = 'https://en.wikipedia.org/w/api.php';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<WikipediaSearch[]> {
    return this.http
      .get<WikipediaResponse>(this.url, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(map((res) => res.query.search));
  }
}
