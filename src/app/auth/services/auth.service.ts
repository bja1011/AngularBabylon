import { Injectable } from '@angular/core';
import { AUTH_TOKEN_NAME } from '../constants/constants';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isAuthenticated() {
    return of(this.isLogged());
  }

  isLogged() {
    return !!localStorage.getItem(AUTH_TOKEN_NAME);
  }
}
