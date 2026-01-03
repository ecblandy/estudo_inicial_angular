import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ContentComponent } from './components/content/content';
import { Api } from "./components/api/api";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, Api],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  reciveVlaue(text: string) {
    console.log('valor recebido' + text);
  }
  titleApp = 'Titulo do header App';
}
