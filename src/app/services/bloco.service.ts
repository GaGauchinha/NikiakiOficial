import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:8080/bloco';

@Injectable({
  providedIn: 'root'
})
export class BlocoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  validarCoin(): Observable<any> {
    return this.http.get(`${baseUrl}/bloco/validaBlocoOutroUsuario`);
  }

}
