import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {MessageService} from '../../message/message.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(data => this.books = data, er => this.messageService.addMessage('BookList not available') );
  }

}
