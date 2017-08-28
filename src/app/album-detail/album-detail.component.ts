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
  paramsSubscription: Subscription;
  @Input() albumId:number;



  constructor(private route: ActivatedRoute,
              private phS: PhotosService) {
                console.log(this.albumId);
              }

  ngOnInit() {
    this.phS.getPhotos(this.albumId).then(album => this.album = album);
                console.log(this.albumId);

  }

  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }

}
