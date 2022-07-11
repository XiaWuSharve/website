/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-10 21:30:56
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-11 15:12:50
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
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from 'path';
import { StatusMonitorModule } from 'nest-status-monitor';
import StatusMonitor from './config/StatusMonitor';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/management'),
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    StatusMonitorModule.setUp(StatusMonitor),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('email'),
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
