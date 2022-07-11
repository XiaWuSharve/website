/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-08 14:56:27
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-09 15:35:32
 * @FilePath: \website\src\modules\email\email.service.ts
 * @Description: 邮件服务
 */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  /**
   * @description: 发送邮件内容
   * @param {string} subject
   * @param {string} template
   * @param {string} html
   * @param {string} text
   * @return {*}
   */
  async sendMail(
    subject: string,
    template?: string,
    html?: string,
    text?: string,
  ) {
    this.mailerService.sendMail({
      to: '2000303207@cjlu.edu.cn',
      from: 'sharve@foxmail.com',
      subject,
      text,
      html,
      template,
    });
  }
}
