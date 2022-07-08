/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-08 14:12:00
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-08 14:13:26
 * @FilePath: \website\src\modules\exception\exception.module.ts
 * @Description: 异常处理模块
 */
import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';
import { ExceptionService } from './exception.service';

@Module({
  controllers: [ExceptionController],
  providers: [ExceptionService],
})
export class ExceptionModule {}
