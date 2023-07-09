import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { MessageDto } from '../models/message-dto.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private hubConnection!: signalR.HubConnection;
  private messageReceivedSubject = new Subject<MessageDto>();
  messageReceived$ = this.messageReceivedSubject.asObservable();

  public startConnection = () => {
    // Create connection
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/chathub') 
      .build();

    // Start connection
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))

    // Reconnect
    this.hubConnection.onclose((err) => {
      console.log(err);
      this.hubConnection.start();
    });

    // Listen for messages
    this.hubConnection.on('ReceiveMessage', (data) => {
      console.log('recieved message',data);
      this.messageReceivedSubject.next(data);
    });
  }

  public addTransferChatDataListener = () => {
    this.hubConnection.on('ReceiveMessage', (data) => {
      console.log(data);
    });
  }


  public sendChatMessage(message: MessageDto) {
    this.hubConnection
      .invoke('SendMessage', message)
      .catch((err) => console.error(err));
  }
}
