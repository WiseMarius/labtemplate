import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent, UserProfileComponent, UserMomentsComponent, UserPhotosComponent, UserSettingsComponent, UserFriendsComponent } from './components';
const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'user-profile', component: UserProfileComponent
  },
  {
    path: 'user-moments', component: UserMomentsComponent
  },
  {
    path: 'user-photos', component: UserPhotosComponent
  },
  {
    path: 'user-settings', component: UserSettingsComponent
  },
  {
    path: 'user-friends', component: UserFriendsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
