import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入bootstrap
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.js'
Vue.use(VueAxios, axios);

Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(),    //day
    "h+": this.getHours(),   //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
    "S": this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }
  return format;
}

// import vuex from './vuex.vue'
/* 工具组件 */

//  首页
import index from './components/content/tool/index'
// html 转为js字符串
import js_str from './components/content/tool/js_str'
// css3兼容
import css3 from './components/content/tool/css3'
// html 格式化
import html_reset from './components/content/tool/html_reset'
// css 换算
import css_matrixing from './components/content/tool/css_matrixing'
// 二维码生成
import qr_code from './components/content/tool/qr_code'
// 生成缩略图
import creat_img from './components/content/tool/creat_img'
// animate.css
import animate from './components/content/tool/animate'
// 颜色选取
import colpick from './components/content/tool/colpick'
// 图片压缩
import tinypng from './components/content/tool/tinypng'
// css压缩格式化
import css_format from './components/content/tool/css_format'
// json压缩格式化
import json_format from './components/content/tool/json_format'
// js压缩格式化
import js_format from './components/content/tool/js_format'
// css生成三角形
import css_triangle from './components/content/tool/css_triangle'
// 生成md的api
import md_api from './components/content/tool/md_api'
// 字符串格式化为多种类型
import string_format from './components/content/tool/string_format'

// 公共按钮 蓝色
import comm_btn from './components/content/comm/comm_btn.vue'

// 安装 Vue.js 插件
Vue.use(VueRouter);
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

import App from './App'

let app = Vue.extend(App);

// 然后定义路由(routes)，components还可以是Vue.extend()创建的
const routes = [
  { path: '/', component: index },
  { path: '/tool/css3', component: css3 },
  { path: '/tool/js_str', component: js_str },
  { path: '/tool/html_reset', component: html_reset },
  { path: '/tool/css_matrixing', component: css_matrixing },
  { path: '/tool/qr_code', component: qr_code },
  { path: '/tool/creat_img', component: creat_img },
  { path: '/tool/animate', component: animate },
  { path: '/tool/colpick', component: colpick },
  { path: '/tool/tinypng', component: tinypng },
  { path: '/tool/css_format', component: css_format },
  { path: '/tool/json_format', component: json_format },
  { path: '/tool/js_format', component: js_format },
  { path: '/tool/md_api', component: md_api },
  { path: '/tool/string_format', component: string_format },
  { path: '/tool/css_triangle', component: css_triangle }
];

// 创建 实例 router
const router = new VueRouter({
  // mode:'history',
  // https://router.vuejs.org/zh-cn/essentials/history-mode.html
  // 配置 history 需要去 配置后端环境 ，让用户去访问一个地址，映射到我这个地址

  // server {
  //         listen       80;
  //         server_name  www.m-example.com;
  //         root   "E:/UED/eagle/branch/eagle201510/m-example";
  //         location / {
  //             try_files $uri $uri/ /index.html =404;
  //         }
  // }
  base: __dirname,
  routes: routes
});


// 启动应用 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)
}).$mount('#app')
