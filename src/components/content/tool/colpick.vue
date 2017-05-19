<!-- 颜色选取 -->
<!--  name: 'colpick' -->
<template>
  <div class="tool_box">
	<h1>颜色选取</h1>

	<!-- 主内容 start -->
   <iframe style="width: 100%; height: 550px;" scrolling="no" frameborder="no" id="info" src="http://www.chenzejiang.com/tool/static/iframe/colpick/index.html">
   </iframe>
	<!-- 主内容 end -->
  
  </div>
</template>

<style lang="less" scoped>
 .tool_box{
	font-size: 20px;
	padding:20px;
	color: #000;
  
 }

</style>


<script>

export default {
  name: 'colpick',
  data () {
    return {
       
    }
  },
  methods:{
  	// 颜色
  	colpick:function(){


  	}
  },

  // 加载qrcode jquery 插件
  mounted:function(){

  }
}
</script>

