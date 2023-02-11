import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isLoggedIn = false;

  title = 'PilacoinAngular';
  username?: string;
  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
    if (this.isLoggedIn) {
      const usuario = this.loginService.getLoggedUser()
      this.username = usuario.username;
    }
  }
  logout(): void {
    this.loginService.logout();
    window.location.reload();
  }
}
