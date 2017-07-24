import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Comment } from "./../Comment";

@Injectable()

export class CommentsService {

  private _url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private _http: Http) { }

  getComments() : Promise<Comment[]> {
    return this._http.get(this._url)
      .map(res => res.json()).toPromise();
  }

  createComment(comment: Comment){
    this._http.post(this._url, JSON.stringify(comment))
      .map(res => res.json());
  }
}
