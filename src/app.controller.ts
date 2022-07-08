/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-10 21:30:56
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-02 16:30:59
 * @FilePath: \website\src\app.controller.ts
 * @Description: 全局守卫
 */
import { Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
