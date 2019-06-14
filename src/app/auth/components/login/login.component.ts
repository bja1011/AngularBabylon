import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.createForm();
  }

  doLogin() {
    this.authService.authenticateUser({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    })
      .subscribe(() => {
        this.router.navigate(['']);
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
