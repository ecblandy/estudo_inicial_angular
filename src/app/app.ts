import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ContentComponent } from './components/content/content';
import { Api } from './components/api/api';
import { FormDriven } from './components/form-driven/form-driven';
import { FormReactive } from './components/form-reactive/form-reactive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    ContentComponent,
    Api,
    FormDriven,
    FormReactive,
    RouterLinkWithHref,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  reciveVlaue(text: string) {
    console.log('valor recebido' + text);
  }
  titleApp = 'Titulo do header App';
}
