import { JwtService } from '@nestjs/jwt';
/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-11 14:52:05
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-11 14:59:23
 * @FilePath: \website\src\modules\auth\auth.service.ts
 * @Description: 验证服务
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validate(username: string, password: string) {
    if (username) {
      return { username, userId: 1 };
    } else return null;
  }

  async login(user) {
    const payload = { username: user.username, userId: user.userId };
    return {
      accessKey: this.jwtService.sign(payload),
    };
  }
}
