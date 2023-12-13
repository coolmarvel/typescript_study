import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  // Swagger
  const config = new DocumentBuilder().setTitle('NestJS Project').setDescription('NestJS Project API Description').setVersion('1.0.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // ValidationPipe Global Apply
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // class-transformer apply

  await app.listen(port);
  console.log(`listening on http://localhost:${port}`);
}
bootstrap();
