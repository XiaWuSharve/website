/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-07 20:35:44
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:37:18
 * @FilePath: \website\src\modules\hello\hello.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  async getHello(): Promise<string> {
    return 'hello world!';
  }
}
