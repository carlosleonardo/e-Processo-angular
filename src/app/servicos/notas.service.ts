import { Injectable } from '@angular/core';
import { ModeloNota } from '../modelos/nota';

@Injectable({
  providedIn: 'root',
})
export class NotasService {
  private idNovo: number = 0;
  private notas: ModeloNota[] = [];

  incluir(nota: ModeloNota) {
    this.idNovo += 1;
    nota.id = this.idNovo;
    console.log(`Incluída nota ${nota.nota} com id=${this.idNovo}`);
    this.notas = [...this.notas, nota];
  }
  alterar(id: number) {
    console.log(`Alterada nota ${id}`);
  }
  excluir(id: number) {
    console.log(`Excluída nota: ${id}`);
  }
  obterNotas(): ModeloNota[] {
    return this.notas;
  }
  obterPorId(id: number): ModeloNota | undefined {
    return this.notas.find((nota) => nota.id === id);
  }
}
