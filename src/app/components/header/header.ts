import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  titleHeader = 'Teste';
  initialValueInput = 'asuahsuhasuhasu';
  applyClass = false;
  colorStyle = 'orange';

  onUpdateUser() {
    this.titleHeader = 'Vinícius';
    this.applyClass = true;
    this.colorStyle = 'red';
    console.log(this.initialValueInput);
  }
}
