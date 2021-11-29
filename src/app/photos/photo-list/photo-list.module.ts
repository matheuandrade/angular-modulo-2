import { DarkenOnHoverModule } from './../../shared/directives/dark-on-hover/darkenOhHover.module';
import { FilterByDescriptionPipe } from './photos/filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from './../../shared/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule { }
