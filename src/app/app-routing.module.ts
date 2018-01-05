import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books/books-list/books-list.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {AddBookComponent} from './books/add-book/add-book.component';
import {LoginComponent} from './security/login/login.component';
import {AuthGuard} from './security/authorization/auth.guard';

const routes: Routes = [
  { path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: '/books', pathMatch: 'full' },
      { path: 'books', component: BooksListComponent },
      { path: 'book',
        children: [
          { path: 'add', component: AddBookComponent },
          { path: ':id', component: BookDetailsComponent },
        ]},
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
  providers: [AuthGuard]
})
export class AppRoutingModule { }
