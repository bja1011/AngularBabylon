import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.createForm();
  }

  doLogin() {
    this.authService.authenticateUser({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    });
  }

  createForm() {
    return this.fb.group({
      username: [
        '',
        [Validators.required]
      ],
      password: [
        '',
        [Validators.required]
      ]
    });
  }
}
