import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from './books/book.service';
import { MessageService } from './message/message.service';
import { MessageComponent } from './message/message/message.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    MessageComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
