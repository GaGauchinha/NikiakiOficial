import {Component, OnInit} from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  usuario: any = {
    username: null,
    senha: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.usuario = this.tokenStorage.getUsuario();
    }
  }

  onSubmit(): void {
    const { username, senha } = this.usuario;

    this.authService.login(username, senha).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsuario(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.usuario = this.tokenStorage.getUsuario();
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
