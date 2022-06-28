import { HashEncriptMiddleware } from './../hash-encript.middleware';
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-26 19:55:10
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-28 13:57:16
 * @FilePath: \website\src\user\user.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashEncriptMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.POST });
  }
}
