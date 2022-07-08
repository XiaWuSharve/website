/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-28 19:21:00
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:29:33
 * @FilePath: \website\src\auth\auth.module.ts
 * @Description: 验证模块
 */
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Passport } from 'passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/schema/user.schema';
import { AuthConstants } from './auth.constants';

@Module({
  providers: [AuthService],
  imports: [
    UserModule,
    Passport,
    JwtModule.register({
      secret: AuthConstants.secret,
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
