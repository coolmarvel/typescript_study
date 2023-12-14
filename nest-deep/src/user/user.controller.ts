import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { PageReqDto } from 'src/common/dto/req.dto';
import { User, UserAfterAuth } from 'src/common/decorator/user.decorator';
import { ApiGetItemsResponse } from 'src/common/decorator/swagger.decorator';
import { FindUserResDto } from './dto/res.dto';
import { FindUserReqDto } from './dto/req.dto';
import { Roles } from 'src/common/decorator/role.decorator';
import { Role } from './enum/user.enum';

@ApiTags('User')
@ApiExtraModels(FindUserReqDto, FindUserResDto)
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindUserResDto)
  @Roles(Role.Admin)
  @Get()
  findAll(@Query() { page, size }: PageReqDto, @User() user: UserAfterAuth) {
    console.log(user);

    return this.userService.findAll(page, size);
  }

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindUserResDto)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
