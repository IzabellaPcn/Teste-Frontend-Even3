import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  url:string;
  publicKey = '6a4a0518018b47e80248c6dd5dad14c0';
  privateKey = '71d8c9a6bed94aa866383d9ef57515c74c4487d8';
  
  hash;

  constructor(
    private http: HttpClient
  ) {
    this.hash = Md5.hashStr('1'.concat(this.privateKey).concat(this.publicKey));
  }

  async getComics() {
    this.url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=".concat(this.publicKey).concat("&hash=".concat(this.hash));
    return this.http.get(this.url).toPromise().then(
      data => {
        return data;
      }
    )
  }

}
