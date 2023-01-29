import { Component } from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NikiakiOficial';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUsuarioBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const usuario = this.tokenStorageService.getUsuario();
      this.roles = usuario.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUsuarioBoard = this.roles.includes('ROLE_USUARIO');

      this.username = usuario.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
