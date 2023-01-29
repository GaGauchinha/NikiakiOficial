import { Component } from '@angular/core';
import {Usuario} from "../../../models/usuario.model";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-rd-usuario',
  templateUrl: './rd-usuario.component.html',
  styleUrls: ['./rd-usuario.component.css']
})
export class RdUsuarioComponent {

  usuario?: Usuario[];
  currentUsuario: Usuario = {};
  currentIndex = -1;
  nome = '';

  constructor(private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUsuario();
  }

  retrieveUsuario(): void {
    this.UsuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUsuario();
    this.currentUsuario = {};
    this.currentIndex = -1;
  }

  setActiveUsuario(Usuario: Usuario, index: number): void {
    this.currentUsuario = Usuario;
    this.currentIndex = index;
  }

  removeAllUsuarios(): void {
    this.UsuarioService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNome(): void {
    this.currentUsuario = {};
    this.currentIndex = -1;

    this.UsuarioService.findByNome(this.nome)
      .subscribe({
        next: (data) => {
          this.usuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
