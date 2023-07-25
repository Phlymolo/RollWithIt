import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LobbyDto } from 'src/app/models/lobby-dto.model';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  private baseUrl = '/api/lobbies';

  constructor(private http: HttpClient) { }

  public getLobbies(): Observable<LobbyDto[]> {
    return this.http.get<LobbyDto[]>(`${this.baseUrl}`);
  }

  public createLobby(lobby: LobbyDto): Observable<LobbyDto> {
    return this.http.post<LobbyDto>(`${this.baseUrl}`, lobby);
  }

}
