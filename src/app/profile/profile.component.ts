import { Subscription } from "rxjs/Subscription";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from "../_services/post.service";
import { UsersService } from '../_services/users.service';
import { PhotosService } from "../_services/photos.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [PostService, PhotosService]
})
export class ProfileComponent implements OnInit, OnDestroy {

  user;
  lat;
  lng;
  name:string;
  adress:string;
  username:string;
  un:string;
  em:string;
  site:string;
  phone:string;
  company:string;
  paramsSubscription: Subscription;



  constructor(
          private route: ActivatedRoute,
          private us: UsersService
    ) { }

  ngOnInit() {
    // const userId =  this.route.snapshot.params['userId'];


    this.paramsSubscription = this.route.params.subscribe(params => {
      this.us.getUser( params ['userId'] )
      .then( res => {
        this.user = res.json();
        this.lat = +this.user.address.geo.lat;
        this.lng = +this.user.address.geo.lng;
        this.name = this.user.name;
        this.un = this.user.username;
        this.adress = this.user.address.zipcode + ", " + this.user.address.city + " city, " + this.user.address.street + " street, " + this.user.address.suite;
        this.em = this.user.email;
        this.site = this.user.website;
        this.phone = this.user.phone;
        this.company = this.user.company.name;
      } )
      .catch( error => {
        console.log( error );
      } )
    })
  }

    ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
    }





}
