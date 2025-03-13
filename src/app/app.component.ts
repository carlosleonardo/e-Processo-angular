import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RodapeComponent } from './components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'e-Processo-angular';
}
