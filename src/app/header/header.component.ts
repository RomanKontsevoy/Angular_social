import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  userId = 2;
  user;
    constructor(
      private us: UsersService

    ) { }


  // ngOnInit() {
  //   this.us.getUser(3)
  //     .then( res => {
  //       this.user = res.json();
  //     } )
  //     .catch( error => {
  //       console.log( error );
  //     } )
  // }

  ngOnInit() {
    // this.getId();
    this.us.getUser( this.userId )
      .then( res => {
        this.user = res.json();
      } )
      .catch( error => {
        console.log( error );
      } )
  }

  // getId(){
  //   this.router.params.subscribe( route => {
  //     this.id = route['id'];
  //   } )
  // }

}
