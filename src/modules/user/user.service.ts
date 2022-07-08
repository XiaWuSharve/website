/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-27 10:08:25
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-06 20:42:09
 * @FilePath: \website\src\user\user.service.ts
 * @Description: 用户服务
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  /**
   * @description: 获取 hello world!
   * @return {*}
   */
  async getHello(): Promise<string> {
    return 'hello wrold!';
  }
}
