import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/oherator/map';


@Injectable()
export class PostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _http: Http) { }

  getPost(){
    return this._http.get(this._url)
      .map(res => res.json());
  }

  createPost(post){
    this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json());
  }
}
