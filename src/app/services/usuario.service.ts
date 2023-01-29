import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario.model";

const baseUrl = 'http://localhost:8080/api/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(baseUrl + 'usuario', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(baseUrl + 'admin', { responseType: 'text' });
  }


  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl);
  }

  get(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNome(nome: any): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseUrl}?nome=${nome}`);
  }

}
