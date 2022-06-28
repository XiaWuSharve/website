/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-10 21:30:56
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-27 14:32:13
 * @FilePath: \website\src\main.ts
 * @Description: 主方法
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const port = 3000;
const logger = new Logger('main.ts');

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });

  /**
   * @description: 配置swagger
   * @return {*}
   */
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('Cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);

  await app.listen(port);
};

bootstrap().then(() =>
  logger.log(`backend started on http://localhost:${port}/`),
);
