import { Controller, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup() {
    return 'signup';
  }

  @Post('signin')
  async signin(@Request() req) {
    return 'signin';
  }
}
