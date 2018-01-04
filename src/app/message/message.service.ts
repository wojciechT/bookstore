import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() {
  }

  clearMessages() {
    this.messages = [];
  }

  addMessage(message: string) {
    this.messages.push(message);
  }
}
