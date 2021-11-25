import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { SalaService } from '../salas/sala.service';
import { FilmeService } from './../filmes/filme.service';
import { SessaoService } from './../sessoes/sessao.service';

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    SidebarComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [
    SidebarComponent,
    ConfirmDialogModule,

    ToastModule
  ],
  providers: [
    DatePipe,
    MessageService,
    ConfirmationService,

    ErrorHandlerService,
    AuthService,
    FilmeService,
    SalaService,
    SessaoService
  ]
})
export class CoreModule { }
