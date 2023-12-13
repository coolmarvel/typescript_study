import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PageReqDto } from 'src/common/dto/req.dto';
import { User, UserAfterAuth } from 'src/common/decorator/user.decorator';
import { ApiGetItemsResponse } from 'src/common/decorator/swagger.decorator';
import { FindUserResDto } from './dto/res.dto';

@ApiTags('User')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindUserResDto)
  @Get()
  findAll(@Query() { page, size }: PageReqDto, @User() user: UserAfterAuth) {
    console.log(user);

    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindUserResDto)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
