import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() title: string = '';
  @Output() textEmit = new EventEmitter<string>();

  onUpdateUser() {
    this.titleHeader = 'Vinícius';
    this.applyClass = true;
    this.colorStyle = 'red';
    console.log(this.initialValueInput);
  }

  emitValue() {
    this.textEmit.emit('Texto do comp filho');
  }
}
