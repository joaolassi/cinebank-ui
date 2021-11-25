import { AuthService } from 'src/app/seguranca/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Filme } from 'src/app/core/model';
import { FilmeFiltro, FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme-pesquisa',
  templateUrl: './filme-pesquisa.component.html',
  styleUrls: ['./filme-pesquisa.component.css']
})
export class FilmePesquisaComponent implements OnInit {

  filme:any[] = [];
  filtro = new FilmeFiltro();

  @ViewChild('tabela') grid!: Table;
  constructor(
    private filmeService: FilmeService,
    private auth: AuthService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Filmes');
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.filmeService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.filme = resultado;
      })
    .catch(erro => this.errorHandler.handle(erro));
  }

aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event!.first! / event!.rows!;
      this.pesquisar(pagina);
  }

confirmarExclusao(lancamento: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(lancamento);
      }
    });
  }

excluir(filme: any) {

    this.filmeService.excluir(filme.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Filme excluído com sucesso!' })
      })
  }

  naoTemPermissao(permissao: string) {
    return !this.auth.temPermissao(permissao);
  }

}
