import { Component, input, output, signal } from '@angular/core';
import { ModeloDocumento } from '../../modelos/documento.modelo';

@Component({
  selector: 'app-documento',
  imports: [],
  templateUrl: './documento.component.html',
  styleUrl: './documento.component.css',
})
export class DocumentoComponent {
  documento = input.required<ModeloDocumento>();
  selecionado = input.required<boolean>();
  aoSelecionar = output<number | undefined>();
  aoMarcar(id: number | undefined) {
    this.aoSelecionar.emit(id);
  }
}
