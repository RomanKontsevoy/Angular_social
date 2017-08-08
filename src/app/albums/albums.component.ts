import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from '../_services/photos.service';
import { UsersService } from '../_services/users.service';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass'],
  providers: [PhotosService]

})
export class AlbumsComponent implements OnInit {

  albums = [];
  users = [];
  userId: number;
  isLoading = true;



  constructor(
    private phS: PhotosService,
    private us: UsersService
) { };

  ngOnInit() {
    this.phS.getAlbums(this.userId)
    .then(albums => {
      this.isLoading = false;
      this.albums = albums;
      console.log(this.albums)
    });
    this.us.getUsers()
      .then( res => {
        this.users = res.json();
        console.log (this.users);
      } )
      .catch( error => {
        console.log( error );
      } )
  }

}
