import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { MessageDto } from '../models/message-dto.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  private baseUrl: string = "api/Test";  
  public responseMessage: string = "";

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.sendMessage();
  }

  sendMessage() {
    const message: MessageDto = { text: "hello" };// "hello";// { text: 'Hello, server!' };
    this.http.post(`${this.baseUrl}`, message, { responseType: 'text' }).pipe(
      map((response) => this.responseMessage = response),
      catchError((error) => this.responseMessage = error.message)
    ).subscribe();
  }


}
