import { Component, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/models/message-dto.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit  {

  messages: MessageDto[] = [];

  message: MessageDto = { user: 'TestUser', text: '' };

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.startConnection();

    this.chatService.messageReceived$.subscribe((message: MessageDto) => {
      this.messages.push(message);
    });
  }


  sendMessage() {
    this.chatService.sendChatMessage(this.message);
    this.message.text = '';
  }

}
