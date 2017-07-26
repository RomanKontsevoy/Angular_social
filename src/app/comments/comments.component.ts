import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../_services/comments.service';
import { PostService } from "../_services/post.service";
import { UsersService } from '../_services/users.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass'],
  providers: [CommentsService, PostService]

})
export class CommentsComponent implements OnInit {

  comments = [];
  posts = [];
  users = [];
  @Input() postId: number;

  constructor(
    private ps: PostService,
    private cs: CommentsService,
    private us: UsersService

  ) { }

  ngOnInit() {
    this.cs.getComments(this.postId)
      .then(comments => {
        console.log(comments[2].body);
        this.comments = comments;
    });
    this.ps.getPosts()
      .then( posts => {
        this.posts = posts;
      });
    this.us.getUsers()
      .then( res => {
        this.users = res.json();
      });
      
  }

}
