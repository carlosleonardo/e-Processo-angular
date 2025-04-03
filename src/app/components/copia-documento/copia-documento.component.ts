import { Component } from '@angular/core';
import { BuscarDocumentosComponent } from '../buscar-documentos/buscar-documentos.component';
import { ListaDocumentosComponent } from '../lista-documentos/lista-documentos.component';

@Component({
  selector: 'app-copia-documento',
  imports: [BuscarDocumentosComponent, ListaDocumentosComponent],
  templateUrl: './copia-documento.component.html',
  styleUrl: './copia-documento.component.css',
})
export class CopiaDocumentoComponent {}
