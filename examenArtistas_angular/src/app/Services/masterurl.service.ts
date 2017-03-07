import { Injectable } from '@angular/core';

@Injectable()
export class MasterurlService {

  private _Url: string = 'https://examen-twj-laracristian-cristian3006.c9users.io/';
  constructor() {

  }
  getUrl(){
    return this._Url;
  }

}
