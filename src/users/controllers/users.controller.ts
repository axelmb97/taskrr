import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService){}

  @Get('username')
  getUserName() : string {
    return this.usersService.getUser();
  }
}
