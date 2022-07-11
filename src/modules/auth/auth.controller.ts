/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-11 14:52:59
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-11 19:47:29
 * @FilePath: \website\src\modules\auth\auth.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async hello() {
    return 'hello';
  }
}
