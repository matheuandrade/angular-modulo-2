import { SigninComponent } from './home/signin/signin.component';
import { PhotListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user/:username', component: PhotoListComponent, resolve: {photos: PhotListResolver}},
  { path: '', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
