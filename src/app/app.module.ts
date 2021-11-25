import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SalaModule } from './salas/salas.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FilmesModule } from './filmes/filmes.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { LandingPageModule } from './landing-page/landing-page.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    SegurancaModule,
    FilmesModule,
    SalaModule,
    LandingPageModule,
    SessoesModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
