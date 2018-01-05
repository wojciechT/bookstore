import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from './books/book.service';
import {MessageService} from './message/message.service';
import {MessageComponent} from './message/message/message.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {AppRoutingModule} from './/app-routing.module';
import {AddBookComponent} from './books/add-book/add-book.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './security/login/login.component';
import {AuthenticationService} from './security/authentication/authentication.service';
import {AuthGuard} from './security/autorization/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    MessageComponent,
    BookDetailsComponent,
    AddBookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookService, MessageService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
