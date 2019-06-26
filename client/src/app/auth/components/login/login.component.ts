import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { State } from '../../../store/root/reducers';
import { Store } from '@ngrx/store';
import { SetUser } from '../../../user/store/actions/user.actions';

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
              private store: Store<State>
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
        this.store.dispatch(new SetUser({id: 1}));
        this.router.navigate(['']);
      });
  }

  createForm() {
    return this.fb.group({
      username: [
        'user',
        [Validators.required]
      ],
      password: [
        'pass',
        [Validators.required]
      ]
    });
  }
}
