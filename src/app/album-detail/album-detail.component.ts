import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../_services/photos.service';
import { Photo } from '../interfaces';



@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})

export class AlbumDetailComponent
implements OnInit
// , OnDestroy
{

  album;
  // paramsSubscription: Subscription;



  constructor(private route: ActivatedRoute,
              private phS: PhotosService) {
              }

  onClick(a){
      console.log("Clicked!");
      let imgUrl = a.url;
      console.log(imgUrl);
      console.log(a);


    };

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let albumId:number = +params['albumId'];
        //Присвоили переменной значение роута albumId
        console.log(albumId);
        this.phS.getPhotos(albumId)
        .then(
          album => this.album = album
        );

      }
    );

  }

  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }

}
