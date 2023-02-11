import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario.model";

const baseUrl = 'http://localhost:8080/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(baseUrl + 'usuario', { responseType: 'text' });
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl);
  }

  get(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${baseUrl}/${id}`);
  }
  findByNome(nome: any): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseUrl}?nome=${nome}`);
  }

}
