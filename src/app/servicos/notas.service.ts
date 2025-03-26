import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ModeloNota } from '../modelos/nota';

@Injectable({
  providedIn: 'root',
})
export class NotasService {
  private idNovo: number = 0;
  notas = signal<ModeloNota[]>([]);

  incluir(nota: ModeloNota) {
    this.idNovo += 1;
    nota.id = this.idNovo;
    console.log(`Incluída nota ${nota.nota} com id=${this.idNovo}`);
    this.notas.update((notas) => [...notas, nota]);
  }
  alterar(nota: ModeloNota) {
    console.log(`Alterada nota ${nota.id}`);
    this.notas.update((notas) =>
      notas.map((nota) => (nota.id === nota.id ? { ...nota, ...nota } : nota))
    );
  }
  excluir(id: number) {
    console.log(`Excluída nota: ${id}`);
    this.notas.update((notas) => notas.filter((nota) => nota.id !== id));
  }
  obterPorId(id: number): ModeloNota | undefined {
    return this.notas().find((n) => n.id === id);
  }
}
