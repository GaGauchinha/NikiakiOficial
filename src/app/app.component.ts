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
    console.log("ENTROU NO ISLOGGEDIN");

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const usuario = this.tokenStorageService.getUsuario();

      if (usuario.isAdmin) {
        console.log(usuario.isAdmin)
        this.showAdminBoard
      } else {
        this.showUsuarioBoard
      }
      this.username = usuario.username;
      console.log(usuario)

    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
