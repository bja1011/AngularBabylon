import { Injectable } from '@angular/core';
import { AUTH_TOKEN_NAME } from '../constants/constants';
import { Observable, of } from 'rxjs';
import { UserCredentials } from '../interfaces/user.interfaces';
import { RestService } from '../../api/services/rest.service';
import { ApiService } from '../../api/services/api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService,
  ) {
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

  authenticateUser(userCredentials: UserCredentials) {
    return this.apiService.request('post', 'auth/login', {
      body: userCredentials
    }).pipe(
      // tap(token => console.log(token)),
      tap(token => this.storeToken(token))
    );
  }

  storeToken(token: string) {
    return of(localStorage.setItem(AUTH_TOKEN_NAME, token));
  }

  logout() {
    return this.removeToken();
  }

  private removeToken() {
    return of(localStorage.removeItem(AUTH_TOKEN_NAME));
  }
}
