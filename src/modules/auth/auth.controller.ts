/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-03 14:38:59
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:29:45
 * @FilePath: \website\src\auth\auth.controller.ts
 * @Description: 验证控制器
 */
import { User } from './../user/schema/user.schema';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MyResponse } from '../user/interfaces/my-response.interface';

@Controller('auth')
@ApiTags('验证控制器')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: '登录验证',
  })
  // @UseGuards(LocalAuthGuard)
  async login(@Body() userDto: User): Promise<MyResponse> {
    return this.authService.validate(userDto).catch((err) => {
      return err;
    });
  }

  @Post('regist')
  @ApiOperation({
    summary: '创建用户',
  })
  async createUser(@Body() createUserDto: User): Promise<MyResponse> {
    return this.authService.createUser(createUserDto).catch((err) => {
      return err;
    });
  }
}
