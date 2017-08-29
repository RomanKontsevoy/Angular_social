import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../_services/photos.service';
import { Photo } from '../interfaces';



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.sass']
})
export class AlbumComponent
implements OnInit
{

  album;
  @Input() albumId:number; // Album id of the selected user album



  constructor(private route: ActivatedRoute,
              private phS: PhotosService) {
         }

  ngOnInit() {
      this.phS.getPhotos(this.albumId).then(
        album => this.album = album
      );
}


}
