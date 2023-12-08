import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ select: false })
  password: string;
}
