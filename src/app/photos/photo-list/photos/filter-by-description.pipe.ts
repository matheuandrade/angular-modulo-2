import { Photo } from './../../photo/photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], filter: string): Photo[] {
    filter = filter.trim().toLowerCase()

    if(filter){
      return photos.filter((photo: Photo) => photo.description.toLowerCase().includes(filter))
    }

    return photos
  }

}
