import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class SalaFiltro{
  nome?: string;
  qtdAssentos?: number;
  pagina: number = 0
}

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  salasUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.salasUrl = "http://localhost:8080/salas"
  }

  pesquisar(filtro: SalaFiltro): Promise<any> {
    const params = new URLSearchParams();

    return this.http.get(`${this.salasUrl}`)
      .toPromise()
      .then((response: any) => {

        return response;
      });
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.salasUrl)
      .toPromise();
  }
}
