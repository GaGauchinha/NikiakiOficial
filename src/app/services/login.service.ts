import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuario.model';

//const baseUrl = "http://localhost:8080/login"

export interface Credentials {
  username: string;
  token: string;
  id: string;
  role: string;
  nome: string;
  expires: Date;
}

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL = 'http://localhost:8080/'
  private readonly LOGGED_USER = 'user-logged'

  constructor(
    private http: HttpClient,
    private router: Router
    ) {
      const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
      if (savedCredentials) {
        this._credentials = JSON.parse(savedCredentials);
      }
    }

    login(credentials: { password: any, username: any }): Observable<Usuario> {
      return this.http.post<Usuario>(this.API_URL+'authenticate', credentials).pipe(
        tap(autenticado => {
          if (LoginService.checkLogged(autenticado)) {
            sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(autenticado));
            this.router.navigate(['/carteira']);
          } else {
            Swal.fire('Not Authorized', '', 'error');
          }
    }));
    }

    private static checkLogged(u: Usuario): u is Usuario {
      return (u as Usuario).token !== undefined;
    }
  setLoggedUser(userAccount: Usuario) : void {
    sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(userAccount));
  }

  logout(): void {
    sessionStorage.removeItem(this.LOGGED_USER);
  }

  getLoggedUser(): Usuario | null {
    const loggedUserString = sessionStorage.getItem(this.LOGGED_USER);
    if (loggedUserString) {
      return JSON.parse(loggedUserString);
    } else {
      return null;
    }
  }
    private _credentials: Credentials | null = null;


    isAuthenticated(): boolean {
      return !!this.credentials;
    }

    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials(): Credentials | null {
      return this._credentials;
    }

    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials?: Credentials, remember?: boolean) {
      this._credentials = credentials || null;

      if (credentials) {
        const storage = remember ? localStorage : sessionStorage;
        storage.setItem(credentialsKey, JSON.stringify(credentials));
      } else {
        sessionStorage.removeItem(credentialsKey);
        localStorage.removeItem(credentialsKey);
      }
    }
  }

