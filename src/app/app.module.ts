import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './_services/users.service';
import { LikeComponent } from './like/like.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
// import { AlertModule } from 'bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    LikeComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent
      },
    ]),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
