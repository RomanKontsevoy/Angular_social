import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
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
import { PhotosService } from './_services/photos.service'

import { ProfileComponent } from './profile/profile.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';


// import { AlertModule } from 'bootstrap';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'All posts list' }
  },
  {
    path: 'profile/:userId',
    component: ProfileComponent
  },
  {
    path: 'albums/:userId',
    component: AlbumsComponent
  },
  {
    path: 'albums/:userId/:albumId',
    component: AlbumDetailComponent
  },
  { path: '',
    redirectTo: '/profile/7',
    pathMatch: 'full'
  },
  // {
  //   path: 'albums',
  //   component: AlbumsComponent,
  //   data: { title: 'All albums list' }
  // },
  // {
  //   path: 'albums/:id',
  //   component: AlbumComponent
  // },
  { path: '**',
    redirectTo: '/profile/7',
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
    ProfileComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailComponent
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
  providers: [
    UsersService,
    PhotosService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
