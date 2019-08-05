import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import baseRouters from './base' // 基础路由
import user from './user' // 用户管理
import order from './order' // 订单管理
import vehicle from './vehicle' // 车辆管理
import basics from './basics' // 基础设置

export const constantRouterMap = baseRouters; // 固定路由

export default new Router({
    // mode: 'history', // service support
    scrollBehavior: () => ({ y: 0 }), // 切换路由滚动到顶部
    routes: baseRouters
  });

export const asyncRouterMap = [
    user,
    { path: "*", redirect: "/404", hidden: true },
    order,
    vehicle,
    basics
]


