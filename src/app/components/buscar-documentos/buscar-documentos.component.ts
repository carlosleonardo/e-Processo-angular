import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-documentos',
  imports: [ReactiveFormsModule],
  templateUrl: './buscar-documentos.component.html',
  styleUrl: './buscar-documentos.component.css',
})
export class BuscarDocumentosComponent {
  private servicoForm = inject(FormBuilder);
  formBuscar = this.servicoForm.group({
    textoBusca: ['', [Validators.required]],
  });
  numeroProcessoNaoFormatado = signal<string | undefined>('');
  aoMudarNumeroProcesso(evento: Event) {
    const elemento = evento.target as HTMLInputElement;
    const valor = elemento.value;
    if (elemento.validity.valid && valor.length > 0) {
      this.numeroProcessoNaoFormatado.set(
        this.formBuscar.value.textoBusca?.replace(/\D/g, '')
      );
    }
  }

  buscarDocumentos() {
    console.log('Número do processo: ', this.numeroProcessoNaoFormatado());
  }
}
