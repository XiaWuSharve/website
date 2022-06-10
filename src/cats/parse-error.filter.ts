import { HttpAdapterHost } from '@nestjs/core';
import { ArgumentsHost, Catch, ExceptionFilter, BadRequestException, HttpStatus } from '@nestjs/common';

@Catch(BadRequestException)
export class ParseErrorFilter<BadRequestException> implements ExceptionFilter {

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const {httpAdapter} = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const responseBody = {
      statusCode: HttpStatus.BAD_REQUEST,
      errorMessage: '输错数字了哦！'
    }

    httpAdapter.reply(ctx.getResponse(), responseBody);
  }
}
