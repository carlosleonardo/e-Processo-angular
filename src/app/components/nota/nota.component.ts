import { Component, inject, input, output, signal } from '@angular/core';
import { ModeloNota } from '../../modelos/nota';
import { NotasService } from '../../servicos/notas.service';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'tr[app-nota]',
  imports: [],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css',
})
export class NotaComponent {
  nota = input.required<ModeloNota>();
  mostrarBotoes = input.required<boolean>();
  escopoNota = input.required<string>();
  private servicoNotas = inject(NotasService);
  aoEditarNota = output<ModeloNota>();
  editando = input.required<boolean>();

  alterar() {
    this.aoEditarNota.emit(this.nota());
  }

  excluir(id: number) {
    this.servicoNotas.excluir(id);
  }
}
