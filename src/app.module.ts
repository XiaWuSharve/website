/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-10 21:30:56
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-08 17:29:36
 * @FilePath: \website\src\app.module.ts
 * @Description: 总模块
 */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HelloModule } from './modules/hello/hello.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { EmailModule } from './modules/email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/management'),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.foxmail.com',
          port: 465,
          ignoreTLS: true,
          secure: false,
          auth: {
            user: 'sharve@foxmail.com',
            pass: 'kyikeqppshrpdceh',
          },
        },
        template: {
          dir: __dirname + '/templates/email',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    BlogModule,
    UserModule,
    AuthModule,
    HelloModule,
    ExceptionModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({
        path: 'hello',
        method: RequestMethod.POST,
      })
      .forRoutes('hello');
  }
}
