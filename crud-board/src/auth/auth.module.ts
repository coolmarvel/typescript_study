import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth.strategy';
import { UserModule } from 'src/routes/user/user.module';

@Module({
  imports: [UserModule, PassportModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
