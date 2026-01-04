import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ContentComponent } from './components/content/content';
import { Api } from "./components/api/api";
import { FormDriven } from "./components/form-driven/form-driven";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, Api, FormDriven],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  reciveVlaue(text: string) {
    console.log('valor recebido' + text);
  }
  titleApp = 'Titulo do header App';
}
