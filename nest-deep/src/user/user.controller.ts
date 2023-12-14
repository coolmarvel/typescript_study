import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { PageReqDto } from 'src/common/dto/req.dto';
import { User, UserAfterAuth } from 'src/common/decorator/user.decorator';
import { ApiGetItemsResponse } from 'src/common/decorator/swagger.decorator';
import { FindUserResDto } from './dto/res.dto';
import { FindUserReqDto } from './dto/req.dto';
import { Roles } from 'src/common/decorator/role.decorator';
import { Role } from './enum/user.enum';
import { Public } from 'src/common/decorator/public.decorator';

@ApiTags('User')
@ApiExtraModels(FindUserReqDto, FindUserResDto)
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindUserResDto)
  @Roles(Role.Admin)
  @Get()
  async findAll(@Query() { page, size }: PageReqDto): Promise<FindUserResDto[]> {
    const users = await this.userService.findAll(page, size);

    return users.map(({ id, email, createdAt }) => ({ id, email, createdAt: createdAt.toISOString() }));
  }

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindUserResDto)
  @Get(':id')
  findOne(@Param('id') { id }: FindUserReqDto) {
    return this.userService.findOne(id);
  }

  @Public()
  @Post('bulk')
  createBulk() {
    return this.userService.createBulk();
  }
}
