import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarReceitaComponent } from './paginas/administrador/crud-receita/registrar-receita/registrar-receita.component';
import { EditarReceitaComponent } from './paginas/administrador/crud-receita/editar-receita/editar-receita.component';
import { RdUsuarioComponent } from './paginas/administrador/rd-usuario/rd-usuario.component';
import { CadastrarUsuarioComponent } from './paginas/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListaReceitaComponent } from './paginas/usuario/lista-receita/lista-receita.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './paginas/login/login.component';
import {authInterceptorProviders} from "./helpers/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    RegistrarReceitaComponent,
    EditarReceitaComponent,
    RdUsuarioComponent,
    CadastrarUsuarioComponent,
    ListaReceitaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
