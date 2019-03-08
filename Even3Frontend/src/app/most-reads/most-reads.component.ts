import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-most-reads',
  templateUrl: './most-reads.component.html',
  styleUrls: ['./most-reads.component.css']
})
export class MostReadsComponent implements OnInit {

  private responseApi;
  private comics;
  private current_comic;
  private comics_more = [];
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
        this.generateMoreReads();
        this.loading = false;
      }
    );
  }

  generateMoreReads() {
    let amount_percent = Math.floor(Math.random() * this.comics.length);
    if(amount_percent == 0) {
      amount_percent = 1;
    }
    console.log(amount_percent);
    for(let i=0; i < amount_percent; i++) {
      this.comics_more.push(this.comics[Math.floor(Math.random() * this.comics.length)]);
    }
  }

  openModal(comic) {
    this.current_comic = comic;
  }

}
