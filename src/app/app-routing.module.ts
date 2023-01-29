import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaReceitaComponent} from "./paginas/usuario/lista-receita/lista-receita.component";
import {EditarReceitaComponent} from "./paginas/administrador/crud-receita/editar-receita/editar-receita.component";
import {
  RegistrarReceitaComponent
} from "./paginas/administrador/crud-receita/registrar-receita/registrar-receita.component";
import {RdUsuarioComponent} from "./paginas/administrador/rd-usuario/rd-usuario.component";
import {CadastrarUsuarioComponent} from "./paginas/usuario/cadastrar-usuario/cadastrar-usuario.component";
import {LoginComponent} from "./paginas/login/login.component";
import {AdministradorComponent} from "./paginas/administrador/administrador.component";
import {UsuarioComponent} from "./paginas/usuario/usuario.component";
import {HomeComponent} from "./home/home.component";
import {ListagemReceitasComponent} from "./paginas/usuario/listagem-receitas/listagem-receitas.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-receita', component: ListaReceitaComponent },
  { path: 'listagem-receitas', component: ListagemReceitasComponent },
  { path: 'editar-receita/:id', component: EditarReceitaComponent },
  { path: 'registrar-receita', component: RegistrarReceitaComponent },
  { path: 'rd-usuario', component: RdUsuarioComponent },
  { path: 'rd-usuario/:id', component: RdUsuarioComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'admin', component: AdministradorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
