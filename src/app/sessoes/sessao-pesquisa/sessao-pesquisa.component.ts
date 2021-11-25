import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';

import { SessaoService } from './../sessao.service';

@Component({
  selector: 'app-sessao-pesquisa',
  templateUrl: './sessao-pesquisa.component.html',
  styleUrls: ['./sessao-pesquisa.component.css']
})
export class SessaoPesquisaComponent implements OnInit {

  sessao: any[] = [];
  @ViewChild('tabela') grid!: Table;
  constructor(
    private sessaoService: SessaoService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.sessaoService.pesquisar()
      .then((resultado: any) => {
        this.sessao = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(lancamento: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(sessao: any) {

    this.sessaoService.excluir(sessao.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Sessão excluída com sucesso!' })
      })
  }

  naoTemPermissao(permissao: string) {
    return !this.auth.temPermissao(permissao);
  }

}
