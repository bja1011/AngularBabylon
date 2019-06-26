import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';
import { UserCredentials } from '../../../auth/interfaces';
import { UserToken } from '../../models/user-token.entity';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import { HASH_SALT } from '../../../const';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserToken)
    private readonly userTokenRepository: Repository<UserToken>,
  ) {
  }

  findOneByToken(token: string) {
    return this.userRepository.findOne(token);
  }

  async findOneByCredentials(credentials: UserCredentials) {
    return this.userRepository.find({
      where: {
        username: credentials.username,
        password: await bcrypt.hash(credentials.password, HASH_SALT)
      }
    });
  }

  async createUserToken(user: User) {
    const ent = new UserToken();

    ent.token = await bcrypt.hash(user.id + '.' + moment().valueOf().toString(), HASH_SALT);
    ent.validTo = moment().add(30, 'd').toDate();
    ent.user = await this.userRepository.findOne(user.id);
    return await this.userTokenRepository.save(ent);
  }
}
