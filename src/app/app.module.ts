import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { LikeComponent } from './like/like.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { AgmCoreModule } from '@agm/core';


import { UsersService } from './_services/users.service';
import { PostService } from './_services/Post.service';
import { CommentsService } from './_services/Comments.service';
import { ProfileComponent } from './profile/profile.component';


// import { AlertModule } from 'bootstrap';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'All posts list' }
  },
  {
    path: 'user_profile',
    component: ProfileComponent
  },
  { path: '',
    redirectTo: '/user_profile',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/user_profile',
    pathMatch: 'full'
  },
];



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    LikeComponent,
    CommentsComponent,
    PostsComponent,
    ProfileComponent
  ],
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPhonzSOTDqwjGGRti5HBDmnTROxaPU-U'
    })
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
