/*
 * @Author: XiaWuSharve sharve@foxmail.com
 * @Date: 2022-07-10 14:05:48
 * @LastEditors: XiaWuSharve sharve@foxmail.com
 * @LastEditTime: 2022-07-10 14:22:19
 * @FilePath: \website\src\config\StatusMonitor.ts
 * @Description: 状态监控配置
 */
export default {
  path: '/status',
  port: 3000,
  pageTitle: 'Monitor',
  ignoreStartsWith: '/healt/alive',
  healthChecks: [],
  spans: [
    {
      interval: 1,
      retention: 60,
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
  ],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
};
