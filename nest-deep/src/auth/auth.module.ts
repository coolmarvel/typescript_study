import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({ global: true, secret: 'temp secret', signOptions: { expiresIn: '1d' } })],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
