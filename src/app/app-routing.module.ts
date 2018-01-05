import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books/books-list/books-list.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {AddBookComponent} from './books/add-book/add-book.component';
import {LoginComponent} from './security/login/login.component';
import {AuthGuard} from './security/autorization/auth.guard';
import {AuthenticationService} from './security/authentication/authentication.service';
import {BookService} from './books/book.service';
import {MessageService} from './message/message.service';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard],
  children: [
    { path: 'books', component: BooksListComponent,  canActivate: [AuthGuard] },
    { path: 'book/add', component: AddBookComponent },
    { path: 'book/:id', component: BookDetailsComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/books' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
