import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form-reactive.html',
  styleUrl: './form-reactive.css',
})
export class FormReactive {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  submitForm() {
    console.log(this.userForm);
  }
}
