/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-27 10:08:09
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-06 20:43:31
 * @FilePath: \website\src\user\user.controller.ts
 * @Description: 用户控制器
 */
import { UserService } from './user.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiTags('用户模块')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async hello() {
    return this.userService.getHello();
  }
}
