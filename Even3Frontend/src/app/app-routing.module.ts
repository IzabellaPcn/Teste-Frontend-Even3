import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicBooksComponent } from './comic-books/comic-books.component';
import { MostReadsComponent } from './most-reads/most-reads.component';


const routes: Routes = [
  { path: '', component: ComicBooksComponent },
  { path: 'comics', component:  ComicBooksComponent},
  { path: 'most_reads', component: MostReadsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
