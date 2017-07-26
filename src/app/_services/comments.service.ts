import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Comment } from "./../interfaces";

@Injectable()

export class CommentsService {

  private _url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private _http: Http) { }

  getComments(postId?) : Promise<Comment[]> {
    if (postId){
      return this._http.get(this._url + "/?postId=" + postId)
      .map(res => res.json()).toPromise();
    } else{
      return this._http.get(this._url)
      .map(res => res.json()).toPromise();
    }
 }

  createComment(comment: Comment){
    this._http.post(this._url, JSON.stringify(comment))
      .map(res => res.json());
  }
}
