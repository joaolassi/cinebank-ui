import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';

import { SalaPesquisaComponent } from './sala-pesquisa/sala-pesquisa.component';


const routes: Routes = [
    {
      path: 'salas',
      component: SalaPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_PESQUISAR_SALA'] }
    }
  ];
 @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class SalaRoutingModule {}
