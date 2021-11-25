import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { FilmeCadastroComponent } from './filme-cadastro/filme-cadastro.component';
import { FilmePesquisaComponent } from './filme-pesquisa/filme-pesquisa.component';

const routes: Routes = [
    {
      path: 'filmes',
      component: FilmePesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_PESQUISAR_FILME'] }
    },
    {
      path: 'filmes/novo',
      component: FilmeCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_FILME'] }
    },
    {
      path: 'filmes/:codigo',
      component: FilmeCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_FILME'] }
    }
  ];
 @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class FilmesRoutingModule {}
