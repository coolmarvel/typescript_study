import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { VideoService } from './video.service';
import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
import { ApiGetItemsResponse, ApiGetResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { CreateVideoResDto, FindVideoResDto } from './dto/res.dto';
import { PageResDto } from 'src/common/dto/res.dto';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { ThrottlerBehindProxyGuard } from 'src/common/guard/throttler-behind-proxy.guard';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { User, UserAfterAuth } from 'src/common/decorator/user.decorator';
import { CreateVideoCommand } from './command/create-video.command';
import { FindVideosQuery } from './query/find-videos.query';

@ApiTags('Video')
@ApiExtraModels(FindVideoReqDto, PageReqDto, CreateVideoResDto, FindVideoResDto, PageResDto)
@UseGuards(ThrottlerBehindProxyGuard)
@Controller('api/videos')
export class VideoController {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus,
    private readonly videoService: VideoService,
  ) {}

  @ApiBearerAuth()
  @ApiPostResponse(CreateVideoResDto)
  @Post()
  async upload(@Body() createVideoReqDto: CreateVideoReqDto, @User() user: UserAfterAuth): Promise<CreateVideoResDto> {
    const { title, video } = createVideoReqDto;
    const command = new CreateVideoCommand(user.id, title, 'video/mp4', 'mp4', Buffer.from(''));
    const { id } = await this.commandBus.execute(command);

    return { id, title };
  }

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindVideoResDto)
  @SkipThrottle()
  @Get()
  async findAll(@Query() { page, size }: PageReqDto): Promise<FindVideoResDto> {
    const findVideosQuery = new FindVideosQuery(page, size);
    const videos = await this.queryBus.execute(findVideosQuery);

    return videos.map(({ id, title, user }) => ({ id, title, user: { id: user.id, email: user.email } }));
  }

  @ApiBearerAuth()
  @ApiGetResponse(FindVideoResDto)
  @Get(':id')
  findOne(@Param() { id }: FindVideoReqDto) {
    return this.videoService.findOne(id);
  }

  @ApiBearerAuth()
  @Throttle({ default: { limit: 3, ttl: 60 } })
  @Get(':id/download')
  async download(@Param() { id }: FindVideoReqDto) {
    return this.videoService.download(id);
  }
}
