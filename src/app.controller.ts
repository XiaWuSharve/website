/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-10 21:30:56
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-11 19:38:21
 * @FilePath: \website\src\app.controller.ts
 * @Description: 全局守卫
 */
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
