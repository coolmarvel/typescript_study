import { BadRequestException, Body, Controller, Headers, Post, Request } from '@nestjs/common';
import { ApiExtraModels, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RefreshResDto, SigninResDto, SignupResDto } from './dto/res.dto';
import { Public } from 'src/common/decorator/public.decorator';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
import { ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { User, UserAfterAuth } from 'src/common/decorator/user.decorator';

@ApiTags('Auth')
@ApiExtraModels(SignupResDto, SigninResDto, RefreshResDto)
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiPostResponse(SignupResDto)
  @Public()
  @Post('signup')
  async signup(@Body() { email, password, passwordConfirm }: SignupReqDto) {
    if (password !== passwordConfirm) throw new BadRequestException();

    const { id } = await this.authService.signup(email, password);

    return id;
  }

  @ApiPostResponse(SigninResDto)
  @Public()
  @Post('signin')
  async signin(@Body() { email, password }: SigninReqDto) {
    return this.authService.signin(email, password);
  }

  async refresh(@Headers('authorization') authorization, @User() user: UserAfterAuth) {
    const token = /Bearer\s(.+)/.exec(authorization)[1];
    const { accessToken, refreshToken } = await this.authService.refresh(token, user.id);

    return { accessToken, refreshToken };
  }
}
