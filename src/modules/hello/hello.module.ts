/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-07 20:35:30
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:40:21
 * @FilePath: \website\src\modules\hello\hello.module.ts
 * @Description: Hello?
 */
import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  providers: [HelloService],
  controllers: [HelloController],
})
export class HelloModule {}
