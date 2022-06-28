/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-26 20:11:08
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-27 16:46:01
 * @FilePath: \website\src\user\schema\user.schema.ts
 * @Description: 用户模型
 */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
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
  @ApiProperty({
    description: '盐',
    example: 'GdeEfl',
  })
  salt?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
