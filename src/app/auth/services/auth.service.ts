import { Injectable } from '@angular/core';
import { AUTH_TOKEN_NAME } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isAuthenticated() {
    return this.isLogged();
  }

  isLogged() {
    return !!localStorage.getItem(AUTH_TOKEN_NAME);
  }
}
