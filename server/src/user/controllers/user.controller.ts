import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../services/users/users.service';

@Controller('user')
export class UserController {

  constructor(private readonly usersService: UsersService,
  ) {
  }

  @Get('get')
  @UseGuards(AuthGuard('bearer'))
  getUser() {
    return {id: 4};
  }
}
