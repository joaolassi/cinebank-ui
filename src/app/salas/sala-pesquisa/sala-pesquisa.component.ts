import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { SalaFiltro, SalaService } from '../sala.service';

@Component({
  selector: 'app-sala-pesquisa',
  templateUrl: './sala-pesquisa.component.html',
  styleUrls: ['./sala-pesquisa.component.css']
})
export class SalaPesquisaComponent implements OnInit {

  filtro = new SalaFiltro();

  totalRegistros: number = 0
  salas: any[] = [] ;
  @ViewChild('tabela') grid!: Table;

  constructor(
  private salaService: SalaService,
  private messageService: MessageService,
  private errorHandler: ErrorHandlerService,
  private confirmationService: ConfirmationService,
  private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de Salas');
    this.pesquisar();
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.salaService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.salas = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
