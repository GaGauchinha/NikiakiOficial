import {Component, OnInit} from "@angular/core";
import {TokenStorageService} from "../../services/token-storage.service";
import {LoginService} from "../../services/login.service";

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

  constructor(private loginService: LoginService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.usuario = this.tokenStorage.getUsuario();
    }
  }

  onSubmit(): void {
    const { username, senha } = this.usuario;

    this.loginService.login(username, senha).subscribe({
      next: (data: { accessToken: string; }) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsuario(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.usuario = this.tokenStorage.getUsuario();
        this.reloadPage();
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
