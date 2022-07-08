/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-06-27 14:51:37
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-06-27 16:46:36
 * @FilePath: \website\src\user\utils\encription.ts
 * @Description: 密码加密封装
 */
import { pbkdf2Sync, randomBytes } from 'crypto';
export function genSalt(): string {
  return randomBytes(3).toString('base64');
}

/**
 * @description: 加密密码
 * @param {string} salt
 * @param {string} password
 * @return {*}
 */
export function encript(salt: string, password: string): string {
  return pbkdf2Sync(password, salt, 1000, 16, 'sha256').toString('base64');
}
