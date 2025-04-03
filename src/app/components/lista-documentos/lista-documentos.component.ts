import { Component, input } from '@angular/core';
import { ModeloDocumento } from '../../modelos/documento.modelo';
import { DocumentoComponent } from '../documento/documento.component';

@Component({
  selector: 'app-lista-documentos',
  imports: [DocumentoComponent],
  templateUrl: './lista-documentos.component.html',
  styleUrl: './lista-documentos.component.css',
})
export class ListaDocumentosComponent {
  documentos = input.required<ModeloDocumento[]>();
}
