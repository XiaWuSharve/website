/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-26 19:55:10
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 13:53:17
 * @FilePath: \website\src\user\user.module.ts
 * @Description: 用户模块
 */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
