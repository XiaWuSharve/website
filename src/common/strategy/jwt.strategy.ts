/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-06 20:20:48
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:33:29
 * @FilePath: \website\src\auth\jwt.strategy.ts
 * @Description: JWT策略
 */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConstants } from 'src/modules/auth/auth.constants';
import { User } from 'src/modules/user/schema/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: AuthConstants.secret,
    });
  }

  async validate(payload: User) {
    return { userId: payload._id };
  }
}
