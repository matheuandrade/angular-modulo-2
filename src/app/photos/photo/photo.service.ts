import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient
   }

  listFromUser(userName: string){
    return this.httpClient
    .get<Photo[]>(`${apiUrl}/${userName}/photos`)
  }

  listFromUserPaginated(userName: string, page: number){
    return this.httpClient
    .get<Photo[]>(`${apiUrl}/${userName}/photos?page${page}`)
  }
}
