/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-11 14:51:25
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-11 15:04:33
 * @FilePath: \website\src\modules\auth\auth.module.ts
 * @Description: 验证模块
 */
import { JwtConstants } from './jwt.constants';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: JwtConstants.secret,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
