import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Album, Photo } from "./../interfaces";
// import { Album } from "./../interfaces";
// import { Photo } from "./../interfaces";




@Injectable()


export class PhotosService {

  private _url = 'https://jsonplaceholder.typicode.com'

  constructor(private _http: Http) { }

  getAlbums(userId?) : Promise<Album[]>{
    if (userId){
      return this._http.get(this._url + "/albums" + "/?userId=" + userId)
      .map(res => res.json()).toPromise();
    } else{
      return this._http.get(this._url + "/albums")
      .map(res => res.json()).toPromise();
    }
    
  }

  getPhotos(albumId) : Promise<Photo[]>{
    if (albumId){
      return this._http.get(this._url + "/photos" + "/?albumId=" + albumId)
      .map(res => res.json()).toPromise();
    } else{
      return this._http.get(this._url + "/photos")
      .map(res => res.json()).toPromise();
    }
  }  
  // createPost(post: Album){
  //   this._http.post(this._url, JSON.stringify(post))
  //     .map(res => res.json());
  // }
}
