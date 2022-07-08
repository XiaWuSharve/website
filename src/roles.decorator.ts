/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-28 18:46:57
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-28 18:47:30
 * @FilePath: \website\src\roles.decorator.ts
 * @Description: 权限装饰器
 */
import { SetMetadata } from '@nestjs/common';

/**
 * @description: 权限装饰器
 * @param {array} roles
 * @return {*}
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
