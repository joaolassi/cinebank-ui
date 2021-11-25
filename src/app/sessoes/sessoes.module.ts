import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../shared/shared.module';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

import { SessaoPesquisaComponent } from './sessao-pesquisa/sessao-pesquisa.component';
import { SessaoRoutingModule } from './sessao-routing.module';
import { SessaoCadastroComponent } from './sessao-cadastro/sessao-cadastro.component';

@NgModule({
  declarations: [
    SessaoPesquisaComponent,
    SessaoCadastroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,

    SharedModule,
    SessaoRoutingModule
  ],
  exports: [
    SessaoPesquisaComponent,
    SessaoCadastroComponent
  ]
})
export class SessoesModule { }
