import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Filme } from '../core/model';

export class FilmeFiltro {
  codigo?: number;
  titulo?: string;
  descricao?: number;
  duracao?: Date;
  imagem?: string;
  pagina: number = 0;
  itensPorPagina: number = 4
}

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  filmesUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.filmesUrl = "http://localhost:8080/filmes"
  }

  pesquisar(filtro: FilmeFiltro): Promise<any> {
    const params = new URLSearchParams();

    return this.http.get(`${this.filmesUrl}`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  listarTodas() : Promise<any> {
    return this.http.get(this.filmesUrl)
      .toPromise()
  }

  buscarPorCodigo(codigo: number): Promise<Filme> {
    return this.http.get(`${this.filmesUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  adicionar(filme: Filme): Promise<Filme> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');
    return this.http.post<Filme>(this.filmesUrl, filme, { headers })
      .toPromise();
  }

  uploadHeaders() {
    return new HttpHeaders()
      .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
  }

  atualizar(filme: Filme): Promise<Filme> {
    return this.http.put<Filme>(`${this.filmesUrl}/${filme.codigo}`, filme)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.filmesUrl}/${codigo}`)
      .toPromise();
  }

  urlUploadAnexo(): string {
    return `${this.filmesUrl}/imagem`;
  }

  // uploadHeaders() {
  //   return new HttpHeaders()
  //     .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
  // }

  imagemMostrar(codigo: number) {
    return this.http.get(`${this.filmesUrl}/imagem`,
      { responseType: 'blob' })
      .toPromise();
  }
}
