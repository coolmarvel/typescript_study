import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardEntity } from 'src/entities/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(BoardEntity) private boardRepository: Repository<BoardEntity>,
  ) {}

  async findAll() {
    return await this.boardRepository.find();
  }

  async find(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!board) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return board;
  }

  async create(data: CreateBoardDto) {
    const newBoard = this.boardRepository.create(data);
    await this.boardRepository.save(newBoard);

    return true;
  }

  async update(id: number, data: UpdateBoardDto) {
    await this.getBoardById(id);

    return await this.boardRepository.update(id, { ...data });
  }

  async delete(id: number) {
    const board = await this.getBoardById(id);
    return await this.boardRepository.remove(board);
  }

  async getBoardById(id: number) {
    const board = await this.boardRepository.findOneBy({ id: id });

    if (!board) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    else return board;
  }
}
