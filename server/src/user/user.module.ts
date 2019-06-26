import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { UserToken } from './models/user-token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserToken]),],
  controllers: [UserController,],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {
}
