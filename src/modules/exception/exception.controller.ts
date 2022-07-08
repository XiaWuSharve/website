/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-08 14:12:15
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-08 14:33:44
 * @FilePath: \website\src\modules\exception\exception.controller.ts
 * @Description: 异常过滤控制器
 */
import { ExceptionService } from './exception.service';
import {
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('exception')
@ApiTags('tags?')
export class ExceptionController {
  constructor(private exceptionService: ExceptionService) {}

  @Get()
  @ApiQuery({ name: 'query?', type: String })
  async fetch(@Query() { id }): Promise<string> {
    if (!id) {
      throw new HttpException(
        {
          httpStatus: HttpStatus.BAD_REQUEST,
          message: 'id不能为空！',
          error: 'id cannot be empty',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return 'hello world!';
  }
}
