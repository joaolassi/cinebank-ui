export class Filme {
  codigo?: number;
  titulo?: string;
  descricao?: string;
  duracao?: Date;
  imagem?: string;
  urlImagem?: string;
}

export class Sala{
  codigo?: number;
  nome?:string;
  qtdAssentos?: number;
}

export class Sessao {
  codigo?: number;
  data?: Date;
  horaInicio?: Date;
  horaFim?: Date;
  valor?:number;
  tipoAnimacao = 'ANIMACAO3D';
  tipoAudio = 'ORIGINAL';
  filme =  new Filme();
  sala = new Sala();
}
