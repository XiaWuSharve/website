/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-26 20:11:08
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-06 20:29:15
 * @FilePath: \website\src\user\schema\user.schema.ts
 * @Description: 用户模型
 */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id;

  @Prop()
  @ApiProperty({
    description: '用户手机',
    example: '1000000000',
  })
  phone: string;

  @Prop()
  @ApiProperty({
    description: '用户密码',
    example: '123456',
  })
  password: string;

  @Prop()
  salt?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
