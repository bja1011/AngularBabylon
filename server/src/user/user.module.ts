import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {
}
