<template>
  <div class="footer" id="footer">
    Copyright © {{this.year}} <a href="http://www.chenzejiang.com" title="陈泽江的博客">webJ</a> All Rights Reserved
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      year:new Date().getFullYear()
    }
  }
}
</script>

<style lang="less" scoped>
 .footer{
	width:100%;
	height: 60px;
	line-height: 60px;
	background: #373737;
	border-bottom:2px solid #434343;
	color:#848484;
	font-size: 14px;
	text-align: center;
	a{
		text-decoration: none;
		color:#ababab;
	}
 }
</style>
