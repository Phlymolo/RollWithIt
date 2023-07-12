import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login', // <app-login></app-login>
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private formBuilder: FormBuilder = new FormBuilder();
  public loginForm: FormGroup = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public onSubmit(): void {
    this.userService.login(this.loginForm.value.username);

    console.log("is logged in:", this.userService.isLoggedIn);

    //navigate to dashboard
    this.router.navigate(['/dashboard']);
  }


}
