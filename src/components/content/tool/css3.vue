<!-- CSS3兼容 -->
<!--  name: 'js_str' -->
<template>
  <div class="tool_box">
	<h1>CSS3兼容</h1>

	<!-- 主内容 start -->
	    <textarea id="txt1"></textarea>
	     <div class="btn_box">
         <v-btn btnText="兼容5大浏览器" @click.native="all_browser"></v-btn>
         <v-btn btnText="兼容webkit" @click.native="one_browser"></v-btn>
	     </div>
	    <textarea id="txt2"></textarea>
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
  name: 'js_str',
  data () {
    return {
      
    }
  },
  components: {
    'v-btn':comm_btn
  },
  methods:{
  	// 所有浏览器
  	all_browser:function(){
  		console.log("all_browser");

  		var txt1 = document.getElementById("txt1");
  		var txt2 = document.getElementById("txt2");
  		var opacity_val = txt1.value.substr(0,7);
  		if(opacity_val != "opacity"){
  		    var val  = txt1.value;
  		    var last_str = val.substr(val.length-1,1);
  		    if(last_str != ';'){
  		      val += ';';
  		    }
  		    txt2.value = "-webkit-" + val + "\r\n-moz-" + val   + "\r\n-ms-" + val + "\r\n-o-" + val + "\r\n" + val;
  		}else{
  		     var indexof_str = txt1.value.indexOf(';'); 
  		     var opacity_num = txt1.value.substr(8,indexof_str-8);
  		     alert(typeof(opacity_num)+opacity_num);
  		     var txt1_value = txt1.value;
  		     if(indexof_str == -1){
  		       txt1_value += ';';
  		     }
  		     txt2.value = txt1_value + "\r\n" + "filter:alpha(opacity=" + opacity_num * 100 +");";
  		}
  	},
  	// webkit内核
  	one_browser:function(){
  		console.log("one_browser");

  		var txt1 = document.getElementById("txt1");
  		var txt2 = document.getElementById("txt2");
  		var val  = txt1.value;
  		var last_str = val.substr(val.length-1,1);
  		if(last_str != ';'){
  		  val += ';';
  		}
  		txt2.value = "-webkit-" + val + "\r\n" + val;

  	}
  },
  // 组件渲染完成执行
  mounted:function(){

  }
}
</script>

