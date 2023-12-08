import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(@Ip() ip: string): string {
    // this.logger.log(`getHello method call`);
    // this.logger.debug(`getHello method call`);
    // this.logger.error(`getHello method call`);
    // this.logger.verbose(`getHello method call`);
    // this.logger.warn(`getHello method call`);
    // throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    // console.log(ip);

    console.log(this.configService.get('ENVIRONMENT'));
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
