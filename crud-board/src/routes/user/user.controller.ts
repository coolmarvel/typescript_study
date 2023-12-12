import { Body, Controller, Get, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseInterceptors()
  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post()
  async signup(@Body(new ValidationPipe()) data: CreateUserDto) {
    return await this.userService.createUser(data);
  }

  @Post('/login')
  async login(@Body(new ValidationPipe()) data: LoginUserDto) {
    return await this.userService.login(data);
  }
}
