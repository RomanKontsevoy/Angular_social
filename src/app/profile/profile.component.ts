import { Component, OnInit } from '@angular/core';
import { PostService } from "../_services/post.service";
import { UsersService } from '../_services/users.service';
import { PhotosService } from "../_services/photos.service";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [PostService, PhotosService]
})
export class ProfileComponent implements OnInit {

  id;
  user;
  lat;
  lng;

  constructor(
      private us: UsersService

    ) { }

  ngOnInit() {
    this.us.getUser( 2 )
      .then( res => {
        this.user = res.json();
        this.lat = +this.user.address.geo.lat;
        this.lng = +this.user.address.geo.lng;
      } )
      .catch( error => {
        console.log( error );
      } )
  }

}
