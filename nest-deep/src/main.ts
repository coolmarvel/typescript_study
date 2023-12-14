import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          level: process.env.STAGE === 'prod' ? 'info' : 'debug',
          format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike('NestJS', { prettyPrint: true })),
        }),
      ],
    }),
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('NestJS Project')
    .setDescription('NestJS Project API Description')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // ValidationPipe Global Apply
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // class-transformer apply

  // TransformInterceptor Global Apply
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(port);
  console.log(`listening on http://localhost:${port}`);
  console.log(`STAGE: ${process.env.STAGE}`);
}
bootstrap();
