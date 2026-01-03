import { Component, inject } from '@angular/core';
import { IPost, JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api {
  postsList: IPost[] = [];
  readonly _jsonPlaceholderService = inject(JsonPlaceholderService);
  ngOnInit() {
    this._jsonPlaceholderService.getPosts().subscribe((response) => {
      console.log(response);
      this.postsList = response;
    });
  }
}
