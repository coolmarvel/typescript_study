import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorator/ip.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip: string): string {
    console.log(ip);
    return this.appService.getHello();
  }

  @Get('name/:name')
  getName(@Param('name') name: string): string {
    return `${name} hello`;
  }

  @Get('name')
  getNameQuery(@Query('name') name: string): string {
    return `${name} hello`;
  }
}
