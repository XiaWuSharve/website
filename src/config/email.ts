import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import * as path from 'path';
/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-09 16:25:09
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-09 16:46:17
 * @FilePath: \website\src\config\email.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  transport: {
    host: 'smtp.qq.com',
    port: 465,
    ignoreTLS: true,
    secure: true,
    auth: {
      user: 'sharve@foxmail.com',
      pass: 'kyikeqppshrpdceh',
    },
  },
  template: {
    dir: path.join(__dirname, '../templates/email'),
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
};
