import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { UserCredentials } from '../interfaces';
import { from, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService,
  ) {
  }

  @Post('login')
  login(@Body() userCredentials: UserCredentials) {
    return from(this.authService.validateUserWithCredentials(userCredentials))
      .pipe(
        mergeMap(user => {
          console.log(user)
          if (user) {
            return from(this.authService.createUserToken(user));
          } else {
            return of(null);
          }
        })
      )
  }
}
