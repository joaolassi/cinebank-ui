import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

import { LandingPageModule } from './landing-page/landing-page.module'
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'nao-autorizado', component: NaoAutorizadoComponent },
      { path: 'page-not-found', component: PaginaNaoEncontradaComponent },
      { path: '**', redirectTo: 'page-not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
