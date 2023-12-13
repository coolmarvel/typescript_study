import { User } from 'src/user/entity/user.entity';
import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mimetype: string;

  @Column({ name: 'download_cnt', default: 0 })
  downloadCnt: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.vidoes)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
