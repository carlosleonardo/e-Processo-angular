import { Component } from '@angular/core';
import { ModeloNota } from '../../modelos/nota';
import { NotaComponent } from '../nota/nota.component';

@Component({
  selector: 'app-notas',
  imports: [NotaComponent],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css',
})
export class NotasComponent {
  escopoNotas = '';
  mostrarBotoes = false;
  notas: ModeloNota[] = [];
}
