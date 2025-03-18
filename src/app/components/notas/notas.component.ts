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
  servicoForm = inject(FormBuilder);
  formNota = this.servicoForm.group({
    textoNota: ['', Validators.required],
  });

  escopoNotas = signal('');
  mostrarBotoes = signal(false);
  notas = signal<ModeloNota[]>([]);
  private servicoNotas = inject(NotasService);
  usuarioLogado = 'Carlos Leonardo';

  incluir() {
    this.servicoNotas.incluir({
      nota: this.formNota.value.textoNota || '',
      autor: this.usuarioLogado,
      dataRegistro: new Date(),
      permissaoAlteracao: true,
      permissaoExclusao: true,
    });
    this.obterNotas();
  }
  obterNotas() {
    this.notas.set(this.servicoNotas.obterNotas());
  }
}
