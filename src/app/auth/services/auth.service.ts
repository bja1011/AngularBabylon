import { Injectable } from '@angular/core';
import { AUTH_TOKEN_NAME } from '../constants/constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  /**
   * Check if user is logged and check @todo: if is authenticated on server.
   */
  isAuthenticated(): Observable<boolean> {
    return this.isLogged();
  }

  /**
   * Check if user us logged in.
   * Check for token stored in localstorage. Token can be expired so logged in doesn't mean user is authenticated on server.
   */
  isLogged(): Observable<boolean> {
    return of(!!localStorage.getItem(AUTH_TOKEN_NAME));
  }
}
