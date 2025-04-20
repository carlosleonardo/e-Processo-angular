import { Component, computed, input, OnInit, signal } from '@angular/core';
import { ModeloDocumento } from '../../modelos/documento.modelo';
import { DocumentoComponent } from '../documento/documento.component';
import { BotaoCopiarComponent } from '../botao-copiar/botao-copiar.component';

export interface Selecionado {
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
  documentosValidos = computed(() =>
    this.documentos().filter(
      (documento) =>
        documento.nome.toLocaleLowerCase() !== 'ficha de identificação' &&
        documento.nome.toLocaleLowerCase() !== 'termo de desentranhamento'
    )
  );
  contador = computed(() => this.documentosValidos().length);
  selecionarTodos = signal(false);
  selecionados = signal<Selecionado[]>([]);

  ngOnInit(): void {
    let existemDocumentos = true;
    if (this.documentos().length === 0) {
      existemDocumentos = false;
    }
    if (this.documentos().length > 0) {
      const index = this.documentos().findIndex((documento) => {
        return documento.nome.toLocaleLowerCase() === 'ficha de identificação';
      });
      if (index !== -1 && this.documentos().length === 1) {
        existemDocumentos = false;
      }
    }
    if (!existemDocumentos) {
      alert('Não há documentos juntados ao processo selecionado.');
    }

    // Inicializa todos os documentos para não selecionados
    this.documentosValidos().forEach((documento) => {
      const index = this.selecionados().findIndex(
        (selecionado) => selecionado.id === documento.id
      );
      if (index === -1) {
        this.selecionados.update((selecionados) => [
          ...selecionados,
          { id: documento.id, checked: false },
        ]);
      }
    });
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
        selecionados = [
          ...selecionados, // Adiciona o novo selecionado à lista
          { id, checked: true },
        ];
      }
      return selecionados;
    });
    const todosSelecionados = this.selecionados().every(
      (selecionado) => selecionado.checked
    );
    this.selecionarTodos.set(todosSelecionados);
  }

  obterSelecionadoPeloId(id: number | undefined) {
    const index = this.selecionados().findIndex(
      (selecionado) => selecionado.id === id
    );
    if (index !== -1) {
      return this.selecionados()[index].checked;
    } else {
      return false;
    }
  }
}
