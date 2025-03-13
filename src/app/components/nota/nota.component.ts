import { Component, input } from '@angular/core';
import { ModeloNota } from '../../modelos/nota';

@Component({
  selector: 'app-nota',
  imports: [],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css',
})
export class NotaComponent {
  nota = input.required<ModeloNota>();
  mostrarBotoes = input.required<boolean>();
  escopoNota = input.required<string>();
}
