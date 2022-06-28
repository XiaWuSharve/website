/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-27 14:52:12
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-28 16:36:34
 * @FilePath: \website\src\hash-encript.middleware.ts
 * @Description: 加密密码中间件
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { encript, genSalt } from './user/utils/encription';

@Injectable()
export class HashEncriptMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const salt = genSalt();
    req.body['password'] = encript(salt, req.body['password']);
    req.body['salt'] = salt;
    next();
  }
}
