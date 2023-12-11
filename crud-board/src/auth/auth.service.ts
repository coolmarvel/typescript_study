import { Injectable } from '@nestjs/common';
import { UserService } from 'src/routes/user/user.service';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, password: string) {
    const user = this.userService.getUserByUsername(username);

    if (user) {
      const match = await compare(password, (await user).password);

      if (match) return user;
      else return null;
    }

    return null;
  }
}
