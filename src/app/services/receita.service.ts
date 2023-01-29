import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Receita} from "../models/receita.model";

const baseUrl = 'http://localhost:8080/api/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Receita[]> {
    return this.http.get<Receita[]>(baseUrl);
  }

  get(id: any): Observable<Receita> {
    return this.http.get<Receita>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/receita', data);
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

  findByNome(nome: any): Observable<Receita[]> {
    return this.http.get<Receita[]>(`${baseUrl}?nome=${nome}`);
  }

}
