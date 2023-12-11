import { Injectable } from '@nestjs/common';
import { UserService } from 'src/routes/user/user.service';
import { hash, compare } from 'bcrypt';
import { UserEntity } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = this.userService.getUserByUsername(username);

    if (user) {
      const match = await compare(password, (await user).password);

      if (match) return user;
      else return null;
    }

    return null;
  }

  async login(user: UserEntity) {
    const payload = { id: user.id, username: user.username, name: user.name };

    return { accessToken: this.jwtService.sign(payload) };
  }
}
