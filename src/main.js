import Vue from "vue"

import Cookies from "js-cookie"

import "normalize.css/normalize.css" // A modern alternative to CSS resets

import Element from "element-ui"

import "element-ui/lib/theme-chalk/index.css"

import "@/styles/index.scss" // 全局css

import App from './App' // entry

import router from './router' // router

import store from './store' // vuex

import dayjs from "dayjs"

import DatetimePickerRange from '@/components/DatetimePickerRange/datetimePickerRange' // 时间选择组件

import './icons'

import './permission' // permissions control

import * as filters from './filters'

Vue.prototype.$dayjs = dayjs

// 设置默认字体大小
Vue.use(Element, {
	size: Cookies.get("size") || "medium" // set element-ui default size(medium: 中等的)
})

Vue.use(DatetimePickerRange)

// filter
Object.keys(filters).forEach(keys => {
	Vue.filter(key, filters[key])
})

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// vue实例化
new Vue({
	el: '#app',
	router,
  store,
  render: h => h(App)
})

