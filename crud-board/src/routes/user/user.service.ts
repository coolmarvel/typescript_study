import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from 'src/entities/board.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

import { hash, compare } from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async createUser(data: CreateUserDto) {
    const { name, username, password } = data;
    const encryptedPassword = await this.encryptPassword(password);

    return await this.userRepository.save({ name, username, password: encryptedPassword });
  }

  async getUsers() {
    const qb = this.userRepository.createQueryBuilder('user');

    qb.addSelect((subQuery) => {
      return subQuery.select('count(id)').from(BoardEntity, 'board').where('board.userId = user.id');
    }, 'user_boardCount');

    return qb.getMany();
  }

  async login(data: LoginUserDto) {
    const { username, password } = data;

    const user = await this.userRepository.findOneBy({ username });
    if (!user) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    const match = await compare(password, user.password);
    if (!match) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    return user;
  }

  async encryptPassword(password) {
    const PASSWORD_SALT = 11;

    return await hash(password, PASSWORD_SALT);
  }
}
