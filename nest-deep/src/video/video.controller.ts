import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { CreateVideoResDto, FindVideoResDto } from './dto/res.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
import { PageResDto } from 'src/common/dto/res.dto';
import { ApiGetItemsResponse, ApiGetResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { VideoService } from './video.service';

@ApiTags('Video')
@ApiExtraModels(FindVideoReqDto, FindVideoResDto, PageReqDto, CreateVideoResDto, PageResDto)
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @ApiBearerAuth()
  @ApiPostResponse(CreateVideoResDto)
  @Post()
  upload(@Body() createVideoReqDto: CreateVideoReqDto) {
    return this.videoService.create();
  }

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindVideoResDto)
  @Get()
  findAll(@Query() { page, size }: PageReqDto) {
    return this.videoService.findAll();
  }

  @ApiBearerAuth()
  @ApiGetResponse(FindVideoResDto)
  @Get(':id')
  findOne(@Param() { id }: FindVideoReqDto) {
    return this.videoService.findOne(id);
  }

  @ApiBearerAuth()
  @Get(':id/download')
  async download(@Param() { id }: FindVideoReqDto) {
    return this.videoService.download(id);
  }
}
