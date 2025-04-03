import { Component, input } from '@angular/core';
import { ModeloDocumento } from '../../modelos/documento.modelo';

@Component({
  selector: 'app-documento',
  imports: [],
  templateUrl: './documento.component.html',
  styleUrl: './documento.component.css',
})
export class DocumentoComponent {
  documento = input.required<ModeloDocumento>();
}
