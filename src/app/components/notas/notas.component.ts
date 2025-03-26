import { Component, inject, signal } from '@angular/core';
import { ModeloNota } from '../../modelos/nota';
import { NotaComponent } from '../nota/nota.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotasService } from '../../servicos/notas.service';

@Component({
  selector: 'app-notas',
  imports: [NotaComponent, ReactiveFormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css',
})
export class NotasComponent {
  notaAtual = signal<ModeloNota | undefined>(undefined);
  aoEditarNota(nota: ModeloNota) {
    this.editando.set(true);
    this.notaAtual.set(nota);
    this.formNota.patchValue({ textoNota: this.notaAtual()?.nota });
  }
  servicoForm = inject(FormBuilder);
  formNota = this.servicoForm.group({
    textoNota: ['', Validators.required],
  });

  escopoNotas = signal('');
  mostrarBotoes = signal(true);

  servicoNotas = inject(NotasService);
  usuarioLogado = 'Carlos Leonardo';
  editando = signal(false);

  incluir() {
    this.servicoNotas.incluir({
      nota: this.formNota.value.textoNota || '',
      autor: this.usuarioLogado,
      dataRegistro: new Date(),
      permissaoAlteracao: true,
      permissaoExclusao: true,
    });
    this.formNota.reset();
  }
  alterar() {
    this.notaAtual.update((nota) => {
      if (nota) {
        nota.nota = this.formNota.value.textoNota || '';
      }
      return nota;
    });
    const nota = this.notaAtual();
    if (nota) {
      this.servicoNotas.alterar(nota);
    }
    this.editando.set(false);
    this.formNota.reset();
  }
}
