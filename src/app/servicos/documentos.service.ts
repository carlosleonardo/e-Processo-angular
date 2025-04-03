import { Injectable, Signal, signal } from '@angular/core';
import { ModeloDocumento } from '../modelos/documento.modelo';

const listaDocumentos: ModeloDocumento[] = [
  {
    id: 1,
    nome: 'Documento 1',
    copiaSimples: 'S',
    codigoDocNPG: 0,
    copiaOutroProcesso: '',
  },
  {
    id: 2,
    nome: 'Documento 2',
    copiaSimples: 'N',
    codigoDocNPG: 1,
    copiaOutroProcesso: '',
  },
  {
    id: 3,
    nome: 'Ficha de Identificação',
    copiaSimples: 'N',
    codigoDocNPG: 1,
    copiaOutroProcesso: '',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DocumentosService {
  private documentos = signal<ModeloDocumento[]>(listaDocumentos);
  get Documentos(): Signal<ModeloDocumento[]> {
    return this.documentos.asReadonly();
  }
}
