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

  private boards = [
    { id: 1, name: 'name 1', content: 'content 1' },
    { id: 2, name: 'name 2', content: 'content 2' },
    { id: 3, name: 'name 3', content: 'content 3' },
    { id: 4, name: 'name 4', content: 'content 4' },
    { id: 5, name: 'name 5', content: 'content 5' },
    { id: 6, name: 'name 6', content: 'content 6' },
    { id: 7, name: 'name 7', content: 'content 7' },
    { id: 8, name: 'name 8', content: 'content 8' },
    { id: 9, name: 'name 9', content: 'content 9' },
  ];

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

  create(data: CreateBoardDto) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);

    return newBoard;
  }

  update(id: number, data: UpdateBoardDto) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = { ...this.boards[index], ...data };

      return this.boards[index];
    }

    return null;
  }

  delete(id: number) {
    const index = this.getBoardId(id);

    if (index > -1) {
      const deleteBoard = this.boards[index];
      this.boards.splice(index, 1);

      return deleteBoard;
    }

    return null;
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }

  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }
}
