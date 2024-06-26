import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan'
import { CORS } from './core/constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  app.setGlobalPrefix('api')
  app.enableCors(CORS);
  app.useGlobalPipes(new ValidationPipe({
    transformOptions: {
      enableImplicitConversion: true
    }
  }));
  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT');
  await app.listen(port);

  console.log(`Application running on ${await app.getUrl()}`);
  
}
bootstrap();
