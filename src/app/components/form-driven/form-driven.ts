import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-driven',
  imports: [FormsModule],
  templateUrl: './form-driven.html',
  styleUrl: './form-driven.css',
})
export class FormDriven {
  userName = '';

  submitForm(userForm: any) {
    console.log(this.userName);
    console.log(userForm);
  }
}
