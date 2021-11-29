import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";

import { PhotoService } from "../photo/photo.service";

@Injectable({ providedIn: 'root'})
export class PhotListResolver implements Resolve<Observable<Photo[]>>{

  constructor(private photoService: PhotoService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>{
    return this.photoService.listFromUserPaginated(route.params.username, 1)
  }

}
