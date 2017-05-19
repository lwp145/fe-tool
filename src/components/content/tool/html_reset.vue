<!-- CSS3兼容 -->
<!--  name: 'html_reset' -->
<template>
  <div class="tool_box">
	<h1>html代码格式化()</h1>

	<!-- 主内容 start -->
  <textarea id="txt3" placeholder="html代码格式化"></textarea>
    <div class="btn_box">
      <v-btn btnText="html代码格式化" @click.native="html_reset"></v-btn>

    </div>
  <textarea id="txt4"></textarea>
	<!-- 主内容 end -->
  </div>
</template>

<style lang="less" scoped>
 .tool_box{
	font-size: 20px;
	padding:20px;
	color: #000;
	.btn_box{
		margin:10px 0;
	}
 }
</style>


<script>
import comm_btn from '../comm/comm_btn.vue'

export default {
  name: 'html_reset',
  data () {
    return {
      
    }
  },
  components: {
    'v-btn':comm_btn
  },
  methods:{
  	// 所有浏览器
  	html_reset:function(){
      var txt3 = document.getElementById("txt3");   
      var txt4 = document.getElementById("txt4");  
      console.log("html_reset");
      var source = txt3.value
      var sourceLength = source.length;
      if(sourceLength==0){
        alert("准备压缩的HTML不能为空！");
        return;
      }
      var rep = /\n+/g;
      var repone = /<!--.*?-->/ig;
      var reptwo = /\/\*.*?\*\//ig;
      var reptree = /[ ]+</ig; // 问题
      var sourceZero = source.replace(rep,"");
      var sourceOne = sourceZero.replace(repone,"");
      var sourceTwo = sourceOne.replace(reptwo,"");
      var sourceTree = sourceTwo.replace(reptree,"<");
      txt4.value = sourceTree;
  	}
  },
  // 组件渲染完成执行
  mounted:function(){
    
  }
}
</script>

