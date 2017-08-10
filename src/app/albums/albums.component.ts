import { Subscription } from "rxjs/Subscription";

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PhotosService } from '../_services/photos.service';
import { UsersService } from '../_services/users.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass'],
  providers: [PhotosService]
})


export class AlbumsComponent implements OnInit, OnDestroy
{

  user;
  albums;
  paramsSubscription;
  userId;




  constructor(
    private route: ActivatedRoute,
    private phS: PhotosService,
    private us: UsersService
) { };

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.albums = this.phS.getAlbums(params["userId"])
      .then(albums => {
      this.albums = albums;
      console.log(this.albums);
      });
      this.user = this.us.getUser(params["userId"]).then( user => {
        this.user = user.json();
        console.log (this.user);
        console.log(this.user.name);


      });
    });
  };


  ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
    };

};
