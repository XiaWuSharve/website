/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-08 14:09:17
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-08 19:21:14
 * @FilePath: \website\src\common\filters\http-exception.filter.ts
 * @Description: http异常过滤器
 */
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<HttpException>
  implements ExceptionFilter<HttpException>
{
  catch(exception: HttpException, host: ArgumentsHost) {
    return;
  }
}
