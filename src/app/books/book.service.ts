import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';
import {environment} from '../../environments/environment';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {

  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.bookstoreApi + 'books/');
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:9000/api/books/' + id);
  }
}
