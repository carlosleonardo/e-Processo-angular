import { Component, input } from '@angular/core';
import { Selecionado } from '../lista-documentos/lista-documentos.component';

@Component({
  selector: 'app-botao-copiar',
  imports: [],
  templateUrl: './botao-copiar.component.html',
  styleUrl: './botao-copiar.component.css',
})
export class BotaoCopiarComponent {
  documentosSelecionados = input.required<Selecionado[]>();
  aoClicarCopiar() {
    const idsSelecionados = this.documentosSelecionados()
      .filter((documento) => documento.checked)
      .map((documento) => documento.id);
    if (idsSelecionados.length > 0) {
      alert(`Documentos selecionados: ${idsSelecionados.join(', ')}`);
    } else {
      alert('Nenhum documento selecionado.');
    }
  }
}
