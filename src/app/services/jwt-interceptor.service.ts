import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService {


  constructor(
    private loginService: LoginService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const LOGGED_USER = this.loginService.login('','');

    if (LOGGED_USER) {
      const authRequest = req.clone(
        {setHeaders: {'Authorization' : 'Bearer '+ LOGGED_USER}}
      );
      return next.handle(authRequest);
    }
    else {
      return next.handle(req);
    }
  }
}
