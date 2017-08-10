import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  userId = 7;
  user;
    constructor(
      private us: UsersService

    ) { }


  ngOnInit() {
    this.us.getUser( this.userId )
      .then( res => {
        this.user = res.json();
      } )
      .catch( error => {
        console.log( error );
      } )
  }



}
