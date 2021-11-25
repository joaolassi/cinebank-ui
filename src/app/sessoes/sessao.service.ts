import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { Injectable } from '@angular/core';
import { Sessao } from '../core/model';

export class FiltroSessao {
  codigo?: number;
  data?: Date;
  horaInicio?: Date;
  horaFim?: Date;
  valor?: number;
  tipoAnimacao = 'ANIMACAO3D';
  tipoAudio = 'ORIGINAL';
}

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  sessoesUrl: string;

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) {
    this.sessoesUrl = "http://localhost:8080/sessoes"
  }

  pesquisar(): Promise<any> {
    const params = new URLSearchParams();

    return this.http.get(`${this.sessoesUrl}`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Sessao> {
    return this.http.get(`${this.sessoesUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);
        return response;
      });
  }

  adicionar(sessao: Sessao): Promise<Sessao> {
    return this.http.post<Sessao>(this.sessoesUrl, sessao)
      .toPromise();
  }

  atualizar(sessao: Sessao): Promise<Sessao> {

    return this.http.put<Sessao>(`${this.sessoesUrl}/${sessao.codigo}`, sessao)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);
        return response;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.sessoesUrl}/${codigo}`)
      .toPromise();
  }

  private converterStringsParaDatas(sessoes: any[]) {

    for (const sessao of sessoes) {
      sessao.data = new Date(sessao.data);
    }
  }
}
