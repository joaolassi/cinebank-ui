import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';

import { FilmeCadastroComponent } from './filme-cadastro/filme-cadastro.component';
import { FilmePesquisaComponent } from './filme-pesquisa/filme-pesquisa.component';
import { FilmesRoutingModule } from './filmes-routing.module'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FilmeCadastroComponent,
    FilmePesquisaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    InputTextModule,
    TableModule,
    InputTextareaModule,
    ButtonModule,
    FileUploadModule,
    ToolbarModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    TooltipModule,

    SharedModule,
    FilmesRoutingModule,

  ],
  exports: [
    FilmeCadastroComponent,
    FilmePesquisaComponent
  ]
})
export class FilmesModule { }
