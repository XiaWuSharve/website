/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-28 19:21:13
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:29:24
 * @FilePath: \website\src\auth\auth.service.ts
 * @Description: 验证用户身份
 */
import { MyResponse } from './../user/interfaces/my-response.interface';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/schema/user.schema';
import { encript } from '../user/utils/encription';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  /**
   * @description: 验证密码是否正确
   * @param {User} user
   * @return {*}
   */
  async validate(user: User): Promise<MyResponse> {
    const phone = user.phone;
    const dbUser = await this.findByPhone(phone).catch((err) => {
      throw err;
    });
    if (dbUser) {
      const encryptedPassword = encript(dbUser.salt, user.password);
      if (encryptedPassword === dbUser.password) {
        return {
          code: 0,
          data: '登录成功',
        };
      } else {
        throw {
          code: 1,
          data: '密码错误',
        };
      }
    } else {
      throw {
        code: 2,
        data: '用户不存在',
      };
    }
  }

  /**
   * @description: 根据用户手机生成token
   * @param {User} user
   * @return {*}
   */
  // async login(user: User): Promise<string> {
  //   const payload = { phone: user.phone };
  //   return this.jwtService.sign(payload);
  // }
  async login(user: User): Promise<string> {
    await this.validate(user);
    return this.createToken(user);
  }

  /**
   * @description: 注册用户
   * @param {User} user
   * @return {*}
   */
  async createUser(user: User): Promise<MyResponse> {
    const res = await this.findByPhone(user.phone).catch((err) => {
      throw err as MyResponse;
    });
    if (res) {
      throw {
        code: 1,
        data: '当前手机号已注册',
      };
    } else {
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
    }
  }
  /**
   * @description: 通过手机号查询用户
   * @param {string} phone
   * @return {*}
   */
  async findByPhone(phone: string): Promise<User> {
    const res = await this.userModel.find({ phone }).catch((err) => {
      throw {
        code: 3,
        data: `查询用户失败：${err}`,
      };
    });
    if (res.length === 0) return null;
    else return res[0];
  }

  async createToken(user: User): Promise<string> {
    return this.jwtService.sign(user);
  }
}
