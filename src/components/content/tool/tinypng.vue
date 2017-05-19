<!-- tinypng -->
<!--  name: 'tinypng' -->
<template>
  <div class="tool_box">
	<h1>无损图片压缩 支持 jpg,png </h1>

	<!-- 主内容 start -->
    <iframe style="width: 100%;min-width: 850px; height: 650px;" scrolling="no" frameborder="no" id="info" src="https://tinypng.com">
    </iframe>
    

    <p>正式地址：<a href="https://tinypng.com">https://tinypng.com</a></p>
	<!-- 主内容 end -->
  </div>
</template>

<style lang="less" scoped>
 .tool_box{
	font-size: 20px;
	padding:20px;
	color: #000;
	p{
    margin:10px 0;
  }
}



</style>


<script>
export default {
  name: 'tinypng',
  data () {
    return {
      
    }
  },
  methods:{
  	// 所有浏览器
  	
  },
  // 组件渲染完成执行
  mounted:function(){
    
  }
}
</script>

