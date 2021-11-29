import { PhotoListModule } from './photo-list/photo-list.module';
import { NgModule } from "@angular/core";

import { PhotoModule } from "./photo/photo.module";

@NgModule({
  imports: [
    PhotoModule,
    PhotoListModule
  ]
})

export class PhotosModule {}
