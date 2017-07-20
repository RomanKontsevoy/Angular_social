import { Component, OnInit } from '@angular/core';
import { PostService } from "../_services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  constructor(private ps:) { }

  ngOnInit() {
  }

}
