import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Filme } from 'src/app/core/model';
import { FilmeService } from '../filme.service';


@Component({
  selector: 'app-filme-cadastro',
  templateUrl: './filme-cadastro.component.html',
  styleUrls: ['./filme-cadastro.component.css']
})
export class FilmeCadastroComponent implements OnInit {

  formulario!: FormGroup;
  filme: any[] = [];
  uploadedFiles: any;


  uploadEmAndamento = false;
  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
    this.title.setTitle('Novo Filme');
    const codigoFilme = this.route.snapshot.params['codigo'];
    if (codigoFilme) {
      this.carregarFilme(codigoFilme);
    }
  }
  // Reactive Forms: uma forma de controlar o formulário de maneira mais livre
  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      titulo: [null, Validators.required],
      descricao: [null, [this.validarObrigatoriedade, this.validarTamanhoMinimo(5)]],
      duracao: [null, [this.validarObrigatoriedade]],
      imagem: [null, [this.validarObrigatoriedade]],
      urlImagem: []
    });
  }
  // Validar se é obrigatório
  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }
  // Validar o tamanho do texto
  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } };
    };
  }
  // Verificar se o filme está sendo editado
  get editando() {
    return Boolean(this.formulario.get('codigo')!.value);
  }
 // Carrega filme ao editar
  carregarFilme(codigo: number) {
    this.filmeService.buscarPorCodigo(codigo)
      .then(filme => {
        this.formulario.patchValue(filme)
      },
        erro => this.errorHandler.handle(erro));
  }
  // se está editando atualiza, se não adiciona
  salvar() {
    if (this.editando) {
      this.atualizarFilme();
    } else {
      this.adicionarFilme();
    }
  }
  // Atualiza filme
  atualizarFilme() {
    this.filmeService.atualizar(this.formulario.value)
      .then((filme: Filme) => {
        this.formulario.patchValue(filme)
        this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
        this.atualizarTituloEdicao();
      }
      ).catch(erro => this.errorHandler.handle(erro))
  }
  // Adiciona novo filme
  adicionarFilme() {
    this.filmeService.adicionar(this.formulario.value)
      .then(filmeAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Filme adicionado com sucesso!' });

        this.router.navigate(['/filmes', filmeAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  // Chama a função de uploadHeaders no filmeService
  get uploadHeaders() {
    return this.filmeService.uploadHeaders();
  }
  // Realiza a ação antes do upload
  antesUploadAnexo(event: any) {
    event.xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));

    this.uploadEmAndamento = true;
  }
// Caso dê erro no upload aparece a mensagem
  erroUpload(event: any) {
    this.messageService.add({ severity: 'error', detail: 'Erro ao tentar enviar anexo!' });
    this.uploadEmAndamento = false;
  }
  // Remove a imagem
  removerAnexo() {
    this.formulario.patchValue({
      imagem: null,
      urlimagem: null
    });
    this.uploadEmAndamento = false;
  }
  // pegar o nome do anexo
  get nomeAnexo() {
    const nome = this.formulario?.get('anexo')?.value;
    if (nome) {
      return nome.substring(nome.indexOf('_') + 1, nome.length);
    }

    return '';
  }
  // chama no filmeService o upload da url
  get urlUploadAnexo() {
    return this.filmeService.urlUploadAnexo();
  }
  // ao terminar o upload essa função é chamada
  aoTerminarUploadAnexo(event: any) {
    const imagem = event.originalEvent.body;
    this.formulario.patchValue({
      imagem: imagem.nome,
      urlAnexo: imagem.url
    });
    this.uploadEmAndamento = false;
  }
  // atualiza o título caso esteja editando ou adicionando um novo filme
  private atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Filme: ${this.formulario.get('titulo')!.value}`);
  }
}
