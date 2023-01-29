import { Component } from '@angular/core';
import {Usuario} from "../../../models/usuario.model";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  usuario: Usuario = {
    username: '',
    nome: '',
    senha: '',
    email:'',
    cpf:'',
    celular:'',
  };
  submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  saveUsuario(): void {
    const data = {
      username: this.usuario.username,
      nome: this.usuario.nome,
      senha: this.usuario.senha,
      email: this.usuario.email,
      cpf: this.usuario.cpf,
      celular: this.usuario.celular,
    };

    this.usuarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = {
      username: '',
      nome: '',
      senha: '',
      email:'',
      cpf:'',
      celular:'',
    };
  }
}
