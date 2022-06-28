import { MyResponse } from './../../dist/my-response.interface.d';
/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-27 10:08:25
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-28 16:38:06
 * @FilePath: \website\src\user\user.service.ts
 * @Description: 用户服务
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * @description: 注册用户
   * @param {User} user
   * @return {*}
   */
  async createUser(user: User): Promise<MyResponse> {
    return this.findByPhone(user.phone)
      .then(async (res) => {
        if (res.length !== 0) {
          throw {
            code: 1,
            data: '当前手机号已注册',
          };
        }
        const createUser = new this.userModel(user);
        await createUser.save().catch((err) => {
          throw {
            code: 2,
            data: `保存用户失败：${err}`,
          };
        });
        return {
          code: 0,
          data: '注册成功',
        };
      })
      .catch((err) => {
        throw err as MyResponse;
      });
  }
  /**
   * @description: 通过手机号查询用户
   * @param {string} phone
   * @return {*}
   */
  async findByPhone(phone: string): Promise<User[]> {
    return this.userModel
      .find({
        phone,
      })
      .catch((err) => {
        throw {
          code: 3,
          data: `查询用户失败：${err}`,
        };
      });
  }
}
