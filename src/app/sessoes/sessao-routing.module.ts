import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { SessaoCadastroComponent } from './sessao-cadastro/sessao-cadastro.component';

import { SessaoPesquisaComponent } from './sessao-pesquisa/sessao-pesquisa.component';

const routes: Routes = [
    {
      path: 'sessoes',
      component: SessaoPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_PESQUISAR_SESSAO'] }
    },
    {
      path: 'sessoes/novo',
      component: SessaoCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_SESSAO'] }
    },
    {
      path: 'sessoes/:codigo',
      component: SessaoCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_SESSAO'] }
    }
  ];
 @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class SessaoRoutingModule {}
