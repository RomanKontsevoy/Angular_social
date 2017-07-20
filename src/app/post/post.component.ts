import { Component, OnInit } from '@angular/core';
import { PostService } from "../_services/post.service";
// import {  } from "@angular/http";
import { PostsComponent } from '../../../../angularApp_38/src/app/posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  posts = [];

  isLoading = true;
  constructor(private ps:PostService) {
   };

  ngOnInit() {
    this.ps.getPosts()
    .then(posts => {
      this.isLoading = false;
      console.log(posts[0].title);
    });
  }

}
