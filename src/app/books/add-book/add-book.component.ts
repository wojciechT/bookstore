import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Author} from '../author';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book = new Book();
  author = new Author();

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }

  addNewBook() {
    this.book.Author = this.author;
    this.bookService.postBook(this.book).subscribe(resp => {
      this.book = new Book();
      this.author = new Author();
      this.router.navigateByUrl('');
    });
  }

}
