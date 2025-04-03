import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { NotasComponent } from './components/notas/notas.component';
import { CopiaDocumentoComponent } from './components/copia-documento/copia-documento.component';

export const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'notas',
    component: NotasComponent,
  },
  {
    path: 'copia-documento',
    component: CopiaDocumentoComponent,
  },
];
