import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BoardEntity } from './board.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'id' }) // PrimaryColumn은 자동으로 증가하지 않음.
  id: number;

  @Column()
  name: string;

  @ApiProperty({ description: '유저 아이디', example: 'admin' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ description: '유저 비밀번호', example: 'password' })
  @Column()
  @Exclude()
  password: string;

  @ApiProperty({ description: '작성한 게시글' })
  @OneToMany(() => BoardEntity, (board) => board.user)
  boards: BoardEntity[];

  @Column({ select: false, nullable: true, insert: false, update: false })
  boardCount?: number;
}
