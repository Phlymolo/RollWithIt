import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {}

  public onSubmit(): void {
    console.log(this.loginForm.value);
  }
  

}
