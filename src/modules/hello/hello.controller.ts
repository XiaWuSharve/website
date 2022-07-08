/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-07 20:35:16
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-07 20:38:49
 * @FilePath: \website\src\modules\hello\hello.controller.ts
 * @Description: hello控制器
 */
import { HelloService } from './hello.service';
import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get()
  async hello() {
    return this.helloService.getHello();
  }
}
