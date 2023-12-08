import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from 'src/entities/board.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async createUser(data: CreateUserDto) {
    return await this.userRepository.save(data);
  }

  async getUsers() {
    const qb = this.userRepository.createQueryBuilder('user');

    qb.addSelect((subQuery) => {
      return subQuery.select('count(id)').from(BoardEntity, 'board').where('board.userId = user.id');
    }, 'user_boardCount');

    return qb.getMany();
  }
}
