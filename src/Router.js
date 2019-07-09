/* 首页 */
import index from './components/content/tool/index'
/* html 转为js字符串 */
import js_str from './components/content/tool/js_str'
/* css3兼容 */
import css3 from './components/content/tool/css3'
/* html格式化 */
import html_reset from './components/content/tool/html_reset'
/* CSS换算 */
import css_matrixing from './components/content/tool/css_matrixing'
/* 二维码生成 */
import qr_code from './components/content/tool/qr_code'
/* 生成缩略图 */
import creat_img from './components/content/tool/creat_img'
/* animate.css */
import animate from './components/content/tool/animate'
/* 颜色选取 */
import colpick from './components/content/tool/colpick'
/* 图片压缩 */
import tinypng from './components/content/tool/tinypng'
/* css压缩格式化 */
import css_format from './components/content/tool/css_format'
/* json压缩格式化 */
import json_format from './components/content/tool/json_format'
/* js压缩格式化 */
import js_format from './components/content/tool/js_format'
/* css生成三角形 */
import css_triangle from './components/content/tool/css_triangle'
/* 生成md的api */
import md_api from './components/content/tool/md_api'
/* 字符串格式化为多种类型 */
import string_format from './components/content/tool/string_format'

const routes = [
  { path: '/', component: index },
  { path: '/index', component: index },
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

export default routes;