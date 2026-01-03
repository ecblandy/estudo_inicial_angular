import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  currentUser = 'Vinícius atual';

  updateCurrentUserNameService() {
    this.currentUser = 'Felipe';
  }
}
