import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./paginas/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CarteiraComponent} from "./paginas/usuario/carteira/carteira.component";
import {BlocoComponent} from "./paginas/usuario/bloco/bloco.component";

const routes: Routes = [
  { path: '', redirectTo: 'carteira', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carteira', component: CarteiraComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bloco', component: BlocoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
