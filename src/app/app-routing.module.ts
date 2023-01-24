import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaReceitaComponent} from "./paginas/usuario/lista-receita/lista-receita.component";
import {EditarReceitaComponent} from "./paginas/administrador/crud-receita/editar-receita/editar-receita.component";
import {
  RegistrarReceitaComponent
} from "./paginas/administrador/crud-receita/registrar-receita/registrar-receita.component";
import {RdUsuarioComponent} from "./paginas/administrador/rd-usuario/rd-usuario.component";
import {CadastrarUsuarioComponent} from "./paginas/usuario/cadastrar-usuario/cadastrar-usuario.component";

const routes: Routes = [
  { path: '', redirectTo: 'lista-receita', pathMatch: 'full' },
  { path: 'lista-receita', component: ListaReceitaComponent },
  { path: 'editar-receita/:id', component: EditarReceitaComponent },
  { path: 'registrar-receita', component: RegistrarReceitaComponent },
  { path: 'rd-usuario', component: RdUsuarioComponent },
  { path: 'rd-usuario/:id', component: RdUsuarioComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
