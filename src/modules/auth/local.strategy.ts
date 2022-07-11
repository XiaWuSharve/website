/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-11 15:04:21
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-11 19:29:42
 * @FilePath: \website\src\modules\auth\local.strategy.ts
 * @Description: 本地策略
 */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validate(username, password);
    if (!user) {
      throw new UnauthorizedException();
    } else {
      console.log('local.strategy.ts');
      return user;
    }
  }
}
