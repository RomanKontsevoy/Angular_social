import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../_services/photos.service';
import { Album } from '../interfaces';



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.sass']
})
export class AlbumComponent
// implements OnInit, OnDestroy
{

  album:Album;
  paramsSubscription: Subscription;
  albumId: number = 15;

  constructor(private route: ActivatedRoute,
              private phS: PhotosService) {
                this.phS.getPhotos(this.albumId).then(album => this.album = album);
               }

  // ngOnInit() {
  //   this.paramsSubscription = this.route.params.subscribe(params => {
  //     this.album = this.phS.getPhotos(params['albumId'])
  //     console.log( this.album );
  //   });
  // }

  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }

}
