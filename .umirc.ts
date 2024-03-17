import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '无界'
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: '首页',
      path: '/home',
      component: './Home'
    },
    {
      name: '权限演示',
      path: '/access/*',
      microApp: 'data'
      // component: './Access'
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table'
    }
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:7001'
        },
        {
          name: 'data',
          entry: '//localhost:5173'
        }
      ]
    }
  }
});
