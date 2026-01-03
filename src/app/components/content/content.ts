import { Component, inject } from '@angular/core';
import { StorageService } from '../../services/storage';

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

  readonly _storageService = inject(StorageService);

  onUpdateCurrentUserName() {
    this._storageService.updateCurrentUserNameService();
  }
}
