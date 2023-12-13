import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entity/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  exports: [VideoService],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
