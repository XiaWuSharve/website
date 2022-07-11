/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-11 19:41:14
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-11 19:45:00
 * @FilePath: \website\src\modules\auth\jwt.strategy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { JwtConstants } from './jwt.constants';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      ignoreExpiration: false,
      secretOrKey: JwtConstants.secret,
    });
  }

  async validate(payload) {
    return { userId: payload.sub, username: payload.username };
  }
}
