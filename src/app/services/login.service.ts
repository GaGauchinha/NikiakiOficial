import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Usuario} from "../models/usuario.model";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(username: string, senha: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      senha
    }, httpOptions);
  }
}
