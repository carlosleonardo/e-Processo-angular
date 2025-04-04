import { Component, computed, input, OnInit, signal } from '@angular/core';
import { ModeloDocumento } from '../../modelos/documento.modelo';
import { DocumentoComponent } from '../documento/documento.component';
import { BotaoCopiarComponent } from '../botao-copiar/botao-copiar.component';

interface Selecionado {
  id: number | undefined;
  checked: boolean;
}
@Component({
  selector: 'app-lista-documentos',
  imports: [DocumentoComponent, BotaoCopiarComponent],
  templateUrl: './lista-documentos.component.html',
  styleUrl: './lista-documentos.component.css',
})
export class ListaDocumentosComponent implements OnInit {
  documentos = input.required<ModeloDocumento[]>();
  contador = computed(
    () =>
      this.documentos().filter(
        (documento) =>
          documento.nome.toLocaleLowerCase() !== 'ficha de identificação' &&
          documento.nome.toLocaleLowerCase() !== 'termo de desentranhamento'
      ).length
  );
  selecionarTodos = signal(false);
  selecionados = signal<Selecionado[]>([]);

  ngOnInit(): void {
    let existemDocumentos = true;
    if (this.documentos().length === 0) {
      existemDocumentos = false;
    }
    if (this.documentos().length > 0) {
      const index = this.documentos().findIndex((documento) => {
        documento.nome.toLocaleLowerCase() === 'ficha de identificação';
      });
      if (index !== -1 && this.documentos().length === 1) {
        existemDocumentos = false;
      }
    }
    if (!existemDocumentos) {
      alert('Não há documentos juntados ao processo selecionado.');
    }
  }

  aoMarcarTodas() {
    this.selecionarTodos.update((valor) => !valor);
    this.selecionados.update((selecionados) => {
      selecionados.forEach((selecionado) => {
        selecionado.checked = this.selecionarTodos();
      });
      return selecionados;
    });
  }
  aoSelecionar(id: number | undefined) {
    this.selecionados.update((selecionados) => {
      const index = selecionados.findIndex(
        (selecionado) => selecionado.id === id
      );
      if (index !== -1) {
        selecionados[index].checked = !selecionados[index].checked;
      } else {
        //selecionados.push({ id, checked: true });
        selecionados = [
          ...selecionados, // Adiciona o novo selecionado à lista
          { id, checked: true },
        ];
      }
      return selecionados;
    });
  }
}
