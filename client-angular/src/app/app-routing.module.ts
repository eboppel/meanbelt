import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: '', component: HomeComponent },

  // { path: 'authors', children: [
  //   { path: '', component: AuthorListComponent },
  //   { path: 'new', component: AuthorNewComponent },
  //   { path: ':author_id', component: AuthorDetailsComponent },
  // ]},

  // { path: 'books', children: [
  //   { path: '', component: BookListComponent },
  //   { path: 'new', component: BookNewComponent },
  //   { path: ':book_id', component: BookDetailsComponent },
  // ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
