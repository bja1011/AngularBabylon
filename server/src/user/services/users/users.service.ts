import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  findOneByToken(token: string) {
    return {
      id: 2,
      username: 'adam',
    };
  }
}
