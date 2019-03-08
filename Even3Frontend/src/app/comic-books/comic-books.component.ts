import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comic-books',
  templateUrl: './comic-books.component.html',
  styleUrls: ['./comic-books.component.css']
})
export class ComicBooksComponent implements OnInit {

  private responseApi;
  private comics;
  private current_comic;
  private random_numbers = [];

  public loading = false;

  constructor(
    private comicService: ComicService
  ) { }

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.loading = true;
    this.comicService.getComics().then(
      data => {
        this.responseApi = data;
        this.comics = this.responseApi.data.results;
        console.log(this.comics);
        this.generateRares();
        this.loading = false;
      }
    );
  }

  generateRares() {
    let amount_ten_percent = Math.floor(this.comics.length / 10);
    for(let i=0; i<amount_ten_percent; i++) {
      this.random_numbers.push(Math.floor(Math.random() * this.comics.length));
    }
  }

  verifyIfRare(value) {
    if(this.random_numbers.indexOf(value) != -1) {
      return true;
    }
    return false;
  }

  openModal(comic) {
    this.current_comic = comic;
  }



}
