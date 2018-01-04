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

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(environment.bookstoreApi + 'books/' + id);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(environment.bookstoreApi + 'books/' + id);
  }

  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(environment.bookstoreApi + 'books/', book);
  }
}
