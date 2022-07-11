/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-08 14:56:17
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-09 15:36:04
 * @FilePath: \website\src\modules\email\email.controller.ts
 * @Description: 邮件控制器
 */
import { EmailService } from './email.service';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('email')
@ApiTags('邮件发送')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Get()
  @ApiOperation({
    description: '发送邮件',
  })
  async sendEmail() {
    this.emailService.sendMail('subject', 'temp');
  }
}
