import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  messages: string[] = [];
  messageInput: string = '';

  sendMessage(message: string) {
    if (message.trim()) {
      this.messages.push(message);
      this.messageInput = '';
    }
  }
}
