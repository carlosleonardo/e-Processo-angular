import { Component, inject, input } from '@angular/core';
import { ModeloNota } from '../../modelos/nota';
import { NotasService } from '../../servicos/notas.service';
import { not } from 'rxjs/internal/util/not';

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
  private servicoNotas = inject(NotasService);

  alterar(id: number) {
    this.servicoNotas.alterar(id);
  }
  excluir(id: number) {
    this.servicoNotas.excluir(id);
  }
}
