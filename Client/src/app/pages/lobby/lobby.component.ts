import { Component, OnInit } from '@angular/core';
import { LobbyService } from '../login/lobby.service';
import { LobbyDto } from 'src/app/models/lobby-dto.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public lobbies: LobbyDto[] = [];

  constructor(private lobbyService: LobbyService, private userService:UserService) { }
  ngOnInit(): void {   
    this.getLobbies();    
  }

  private getLobbies(): void {
    this.lobbyService.getLobbies().subscribe(lobbies => {
      this.lobbies = lobbies;
    });
  }

  public createLobby(name: string): void {
    const newLobby: LobbyDto = { 
      id: '',
      name: name, 
      maxPlayers: 4,
      currentPlayers: [this.userService.user.userName],
      isPrivate: false,
      isStarted: false,      
    };
    this.lobbyService.createLobby(newLobby).subscribe(lobby => this.lobbies.push(lobby));
  }

}
