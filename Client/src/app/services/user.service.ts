import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userName: string = '';
  public isLoggedIn: boolean = false;

  constructor() { }

  public login(userName: string): void {
    this.userName = userName;
    this.isLoggedIn = true;
  }

  public logout(): void {
    this.userName = '';
    this.isLoggedIn = false;
  }


}
