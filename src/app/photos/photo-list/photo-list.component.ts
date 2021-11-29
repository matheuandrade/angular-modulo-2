import { Photo } from './../photo/photo';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = []
  hasMore: boolean = true
  currentPage: number = 1
  username: string = ''

  @Input() filter: string = ''

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService){}

  reciverFeedback(respostaFilho) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos
    this.username = this.activatedRoute.snapshot.params.username
  }

  loadMore() {
    this.photoService
    .listFromUserPaginated(this.username, ++this.currentPage)
    .subscribe(photos => {
      this.filter = ''
      this.photos = this.photos.concat(photos)
      if(photos.length === 0){
        this.hasMore = false
      }
    })
  }
}
