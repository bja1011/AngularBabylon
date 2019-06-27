import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';
import { UserCredentials } from '../../../auth/interfaces';
import { UserToken } from '../../models/user-token.entity';
import * as moment from 'moment';
import * as bcrypt from 'bcrypt';
import { HASH_SALT } from '../../../const';
import * as passhash from 'password-hash';

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
    return this.userTokenRepository.findOne({
      where: {
        token: token
      }
    });
  }

  async findOneByCredentials(credentials: UserCredentials) {
    const user = await this.userRepository.createQueryBuilder('users')
      .addSelect('users.username')
      .addSelect('users.password')
      .where('users.username = :username', {username: credentials.username})
      .getOne();
    if (passhash.verify(credentials.password, user.password)) {
      return user;
    }
  }

  async findOneById(id: number) {
    return await this.userRepository.findOne(id);
  }

  async createUserToken(user: User) {
    const ent = new UserToken();

    ent.token = await bcrypt.hash(user.id + '.' + moment().valueOf().toString(), HASH_SALT);
    ent.validTo = moment().add(30, 'd').toDate();
    ent.user = await this.userRepository.findOne(user.id);
    return await this.userTokenRepository.save(ent);
  }

  async createUser(userData?: unknown) {
    return await this.userRepository.save({});
  }

  async register(userData?: unknown) {
    const user = await this.createUser({})
    const token = await this.createUserToken(user);
    console.log(token)
    return token;
  }
}
