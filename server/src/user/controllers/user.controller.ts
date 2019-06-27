import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../services/users/users.service';

@Controller('user')
export class UserController {

  constructor(private readonly usersService: UsersService,
  ) {
  }

  @Get('get')
  @UseGuards(AuthGuard('bearer'))
  getUser(@Req() req) {
    return this.usersService.findOneById(req.user.user.id);
    // return this.usersService.findOneByToken();
  }

  @Post('register')
  registerUser(@Req() req) {
    return this.usersService.register(req.body);
  }
}
