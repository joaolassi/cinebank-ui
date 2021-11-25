import { FilmeService } from './../../filmes/filme.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { Sessao } from 'src/app/core/model';
import { SessaoService } from './../sessao.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { SalaService } from 'src/app/salas/sala.service';
@Component({
  selector: 'app-sessao-cadastro',
  templateUrl: './sessao-cadastro.component.html',
  styleUrls: ['./sessao-cadastro.component.css']
})
export class SessaoCadastroComponent implements OnInit {

  sessao: Sessao = new Sessao();
  filmes: any[] = [];
  salas: any[] = [];

  tipoAnimacao = [
    { label: '2D', value: 'ANIMACAO2D' },
    { label: '3D', value: 'ANIMACAO3D' },
  ];

  tipoAudio = [
    { label: 'Original', value: 'ORIGINAL' },
    { label: 'Dublado', value: 'DUBLADO' },
  ];

  constructor(
    private sessaoService: SessaoService,
    private filmeService: FilmeService,
    private salaService: SalaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Nova Sessao');

    const codigoSessao = this.route.snapshot.params['codigo'];

    if (codigoSessao) {
      this.carregarSessao(codigoSessao);
    }

    this.carregarFilmes();
    this.carregarSalas();
  }

  carregarSessao(codigo: number) {
    this.sessaoService.buscarPorCodigo(codigo)
      .then(sessao => {
        this.sessao = sessao;
      },
      erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.sessao.codigo)
  }

  carregarFilmes() {
    return this.filmeService.listarTodas()
      .then(filmes => {
        this.filmes = filmes
          .map((f: any) => ({ label: f.titulo, value: f.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarSalas() {
    this.salaService.listarTodas()
      .then(salas => {
        this.salas = salas
          .map((s: any) => ({ label: s.codigo, value: s.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarFilme(form);
    } else {
      this.adicionarFilme(form);
    }
  }

  atualizarFilme(form: NgForm) {
    this.sessaoService.atualizar(this.sessao)
      .then((sessao:Sessao) => {
          this.sessao = sessao;
          this.messageService.add({ severity: 'success', detail: 'Sessao alterada com sucesso!' });
          this.atualizarTituloEdicao();
        }
      ).catch(erro => this.errorHandler.handle(erro))
  }

  adicionarFilme(form: NgForm) {
    this.sessaoService.adicionar(this.sessao)
      .then(sessaoAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Sessao adicionada com sucesso!' });

        this.router.navigate(['/sessoes', sessaoAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  private atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Sessao`);
  }

}
