import { Component, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/models/message-dto.model';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit  {

  messages: MessageDto[] = [];

  message: MessageDto = { user: '', text: '' };

  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit(): void {
    this.chatService.startConnection();

    this.message.user = this.userService.user.userName;

    this.chatService.messageReceived$.subscribe((message: MessageDto) => {
      this.messages.push(message);
    });
  }


  sendMessage() {
    this.chatService.sendChatMessage(this.message);
    this.message.text = '';
  }

}
