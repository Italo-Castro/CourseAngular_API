import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message: string = '';

  add(message: string) {
    this.message = message;

    setTimeout(() => {}, 4000);
  }

  clear() {
    this.message = '';
  }
}
