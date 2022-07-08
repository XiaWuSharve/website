/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-27 14:52:12
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:28:49
 * @FilePath: \website\src\hash-encript.middleware.ts
 * @Description: 加密密码中间件
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { genSalt, encript } from 'src/modules/user/utils/encription';

@Injectable()
export class HashEncriptMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const salt = genSalt();
    req.body['password'] = encript(salt, req.body['password']);
    req.body['salt'] = salt;
    next();
  }
}
