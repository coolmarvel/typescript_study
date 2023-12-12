import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UnauthorizedException, UseGuards, ValidationPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateBoardDto } from './dto/update-board.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserInfo } from 'src/decorators/user-info.decorator';

@Controller('board')
@ApiTags('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async findAll() {
    return await this.boardService.findAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.boardService.find(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@UserInfo() userInfo, @Body('content') content: string) {
    if (!userInfo) throw new UnauthorizedException('Unauthorized');

    return await this.boardService.create({ userId: userInfo.id, content });
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@UserInfo() userInfo, @Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) data: UpdateBoardDto) {
    return await this.boardService.update(userInfo.id, id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@UserInfo() userInfo, @Param('id', ParseIntPipe) id: number) {
    return await this.boardService.delete(userInfo.id, id);
  }
}
