import { Component, OnInit } from '@angular/core';
import { PostService } from "../_services/post.service";
import { UsersService } from '../_services/users.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  providers: [PostService]
})

export class PostsComponent implements OnInit {
  
  posts = [];
  users = [];
  isLoading = true;

  constructor(
    private ps: PostService,
    private us: UsersService
) { };

  ngOnInit() {
    this.ps.getPosts()
    .then(posts => {
      this.isLoading = false;
      this.posts = posts;
    });
    this.us.getUsers()
      .then( res => {
        this.users = res.json();
      } )
      .catch( error => {
        console.log( error );
      } )
  }

}