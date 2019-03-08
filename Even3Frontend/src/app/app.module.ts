import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicBooksComponent } from './comic-books/comic-books.component';
import { ComicService } from './comic.service';
import { MostReadsComponent } from './most-reads/most-reads.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicBooksComponent,
    MostReadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
