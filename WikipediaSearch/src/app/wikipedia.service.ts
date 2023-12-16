import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { WikipediaResponce } from './wikipidea-responce';



@Injectable({
  providedIn: 'root'
})

export class WikipediaService {
  constructor(private http: HttpClient) { }
  baseURL = `https://en.wikipedia.org/w/api.php`
  public search(term: string) {
    return this.http.get<WikipediaResponce>(this.baseURL, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      map(data => data?.query?.search)
    );
  }
}
