/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-05 22:05:00
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-05 22:06:25
 * @FilePath: \website\src\auth\local-auth.guard.ts
 * @Description: 自定义本地验证守卫
 */
import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
