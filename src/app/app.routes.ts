import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ContentComponent } from './components/content/content';

export const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
];
