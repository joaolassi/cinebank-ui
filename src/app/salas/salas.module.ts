import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';

import { SalaPesquisaComponent } from './sala-pesquisa/sala-pesquisa.component';
import { SalaRoutingModule } from './sala-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SalaPesquisaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    TableModule,

    SalaRoutingModule,
    SharedModule
  ],
  exports: [
    SalaPesquisaComponent
  ]
})
export class SalaModule { }
