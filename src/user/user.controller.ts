import { MyResponse } from './../../dist/my-response.interface.d';
/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-27 10:08:09
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-28 16:16:14
 * @FilePath: \website\src\user\user.controller.ts
 * @Description: 用户控制器
 */
import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { User } from './schema/user.schema';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('用户模块')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: '创建用户',
  })
  async createUser(@Body() createUserDto: User): Promise<MyResponse> {
    return this.userService.createUser(createUserDto).catch((err) => {
      return err;
    });
  }
}
