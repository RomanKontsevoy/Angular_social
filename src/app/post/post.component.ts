import { Component, OnInit } from '@angular/core';
import { PostService } from "../_services/post.service";
import { UsersService } from '../_services/users.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
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
      console.log(posts[5].title);
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
