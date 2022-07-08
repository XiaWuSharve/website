/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-08 14:56:27
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-08 15:02:22
 * @FilePath: \website\src\modules\email\email.service.ts
 * @Description: 邮件服务
 */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendMail() {
    this.mailerService.sendMail({
      to: '2000303207@cjlu.edu.cn',
      from: 'sharve@foxmail.com',
      subject: 'guess who I am',
      template: 'welcome',
    });
  }
}
