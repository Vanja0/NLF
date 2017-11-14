import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BookService {

  constructor(private http: Http) {
  }

  getAllBooks(): Observable<any> {
    return this.http.get('assets/books.json').map(res => res.json());
  }

}
