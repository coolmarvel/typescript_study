import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { global: true, secret: configService.get('jwt.secret'), signOptions: { expiresIn: '1d' } };
      },
    }),
  ],
  providers: [AuthService, JwtStrategy, { provide: APP_GUARD, useClass: JwtAuthGuard }],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
