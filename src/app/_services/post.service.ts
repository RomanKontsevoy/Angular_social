import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Post } from "./../interfaces";

@Injectable()


export class PostService {

  private _url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _http: Http) { }

  getPosts(userId?) : Promise<Post[]>{
    if (userId){
      return this._http.get(this._url + "/?userId=" + userId)
      .map(res => res.json()).toPromise();
    } else{
      return this._http.get(this._url)
      .map(res => res.json()).toPromise();
    }
    
  }

  createPost(post: Post){
    this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json());
  }
}
