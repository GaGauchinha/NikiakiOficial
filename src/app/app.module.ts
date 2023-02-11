import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './home/home.component';
import {CarteiraComponent} from "./paginas/usuario/carteira/carteira.component";
import { JwtinterceptorService } from './services/jwtinterceptor.service';
import {AuthService} from "./services/auth-guard.service";
import {NgxPaginationModule} from "ngx-pagination";
import { BlocoComponent } from './paginas/usuario/bloco/bloco.component';
import {LoggerModule, NgxLoggerLevel} from "ngx-logger"; //era pra pegar o log dos botoes, mas não funcionou


@NgModule({
  declarations: [
    CarteiraComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    BlocoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],

  providers:[
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
