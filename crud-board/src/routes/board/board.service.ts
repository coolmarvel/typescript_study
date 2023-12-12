import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardEntity } from 'src/entities/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(BoardEntity) private boardRepository: Repository<BoardEntity>) {}

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
    return await this.boardRepository.save(data);
  }

  async update(userId: number, id: number, data: UpdateBoardDto) {
    const board = await this.getBoardById(id);
    if (!board) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    if (userId !== board.userId) throw new UnauthorizedException();

    return await this.boardRepository.update(id, { ...data });
  }

  async delete(userId: number, id: number) {
    const board = await this.getBoardById(id);
    if (!board) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    if (userId !== board.userId) throw new UnauthorizedException();

    return await this.boardRepository.remove(board);
  }

  async getBoardById(id: number) {
    const board = await this.boardRepository.findOneBy({ id });

    if (!board) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    else return board;
  }
}
