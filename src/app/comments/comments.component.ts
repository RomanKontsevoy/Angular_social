import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../_services/comments.service';
import { PostService } from "../_services/post.service";



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass'],
  providers: [CommentsService, PostService]

})
export class CommentsComponent implements OnInit {

  comments = [];
  posts = [];

  constructor(
    private ps: PostService,
    private cs: CommentsService
  ) { }

  ngOnInit() {
    this.cs.getComments()
    .then(comments => {
      console.log(comments[2].body);
      this.comments = comments;
    });
    this.ps.getPosts()
      .then( posts => {
        this.posts = posts;
      } )
      .catch( error => {
        console.log( error );
      } )
  }

}
