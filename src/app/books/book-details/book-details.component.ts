import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {MessageService} from '../../message/message.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private messages: MessageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(value => this.book = value,
      err => this.router.navigateByUrl(''));
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.Id)
      .subscribe(resp => this.router.navigateByUrl(''));
  }
}
