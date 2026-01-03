import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class ContentComponent {
  userType: 'happy' | 'cool' = 'happy';
  users = [
    {
      id: 0,
      name: 'Vinícius',
    },
    {
      id: 1,
      name: 'Teste',
    },
  ];
}
