import { Component, input, OnInit } from '@angular/core';
import { ModeloDocumento } from '../../modelos/documento.modelo';
import { DocumentoComponent } from '../documento/documento.component';

@Component({
  selector: 'app-lista-documentos',
  imports: [DocumentoComponent],
  templateUrl: './lista-documentos.component.html',
  styleUrl: './lista-documentos.component.css',
})
export class ListaDocumentosComponent implements OnInit {
  documentos = input.required<ModeloDocumento[]>();

  ngOnInit(): void {
    let existemDocumentos = true;
    if (this.documentos().length === 0) {
      existemDocumentos = false;
    }
    if (this.documentos().length > 0) {
      const index = this.documentos().findIndex((documento) => {
        documento.nome.toLocaleLowerCase() === 'ficha de identificação';
      });
      if (index !== -1 && this.documentos().length === 1) {
        existemDocumentos = false;
      }
    }
    if (!existemDocumentos) {
      alert('Não há documentos juntados ao processo selecionado.');
    }
  }
}
