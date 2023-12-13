import { BadRequestException, Body, Controller, Post, Request } from '@nestjs/common';
import { ApiExtraModels, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SigninResDto, SignupResDto } from './dto/res.dto';
import { Public } from 'src/common/decorator/public.decorator';
import { SigninReqDto, SignupReqDto } from './dto/req.dto';
import { ApiPostResponse } from 'src/common/decorator/swagger.decorator';

@ApiTags('Auth')
@ApiExtraModels(SignupResDto, SigninResDto)
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
}
