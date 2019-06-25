import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { HttpStrategy } from './strategies/http.strategy';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AuthController],
  imports: [UserModule],
  providers: [AuthService, HttpStrategy],
})
export class AuthModule {
}
