import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    { id: '1', name: 'name 1', content: 'content 1' },
    { id: '2', name: 'name 2', content: 'content 2' },
    { id: '3', name: 'name 3', content: 'content 3' },
    { id: '4', name: 'name 4', content: 'content 4' },
    { id: '5', name: 'name 5', content: 'content 5' },
  ];

  findAll() {
    return this.boards;
  }

  find(id: string) {
    const index = this.boards.findIndex((board) => board.id === id);
    return this.boards[index];
  }
}
