import { Injectable } from '@angular/core';
import { UserDto } from '../models/user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: UserDto = { userName: '' };

  constructor() { }

  public login(userName: string): void {
    this.user = { userName: userName };
  }

  public logout(): void {
    this.user = { userName: '' };
  }

  public isLoggedIn(): boolean {
    console.debug('isLoggedIn: ' + this.user.userName != '');
    return this.user.userName != '';
  }


}
