import { PhotListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'photos/:username', component: PhotoListComponent, resolve: {photos: PhotListResolver}},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
