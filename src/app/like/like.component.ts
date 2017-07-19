import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.sass']
})
export class LikeComponent implements OnInit {
  
  @Input() totalLikes = Math.floor(Math.random() * (1250 - 0 + 1));
  @Input() iLike = false;

  onclick(){
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }

  constructor() { }

  ngOnInit() {
  }

}
