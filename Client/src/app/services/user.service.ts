import { Injectable } from '@angular/core';
import { UserDto } from '../models/user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn: boolean = false;
  public user: UserDto = { userName: '' };

  constructor() { }

  public login(userName: string): void {
    this.user = { userName: userName };
    this.isUserLoggedIn = true;
  }

  public logout(): void {
    this.user = { userName: '' };
    this.isUserLoggedIn = false;
  }

  public isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }


}
