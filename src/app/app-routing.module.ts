import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books/books-list/books-list.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {AddBookComponent} from './books/add-book/add-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'book/add', component: AddBookComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: '**', redirectTo: '/books' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
