import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  authenticate(userName: string, password: string) {
    return this.http.post(`${environment.apiUrl}/user/login`, {
      userName,
      password
    },
    {
      observe : 'response'
    })
    .pipe(tap(response => {
      const authToken = response.headers.get('x-access-token')
        !this.tokenService.hasToken() && this.tokenService.setToken(authToken)
    }))
  }

}
