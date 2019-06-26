import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../user/services/users/users.service';
import { UserCredentials } from '../../interfaces';
import { User } from '../../../user/models/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }

  async validateUserWithToken(token: string): Promise<any> {
    return await this.usersService.findOneByToken(token);
  }

  async validateUserWithCredentials(userCredentials: UserCredentials): Promise<any> {
    return await this.usersService.findOneByCredentials(userCredentials);
  }

  async createUserToken(user: User) {
    return await this.usersService.createUserToken(user)
  }
}
