import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  //TODO: fix this apparently this method is deprecated

  constructor(private router: Router, private userService: UserService) { }

  canActivate(): boolean {

    if (!this.userService.isLoggedIn()) {     
      this.router.navigate(['/login']);
      return false;
    }    

    return true;
  }
}
