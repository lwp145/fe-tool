<!-- HTML代码转换为JavaScript字符串 -->
<!--  name: 'js_str' -->
<template>
  <div class="tool_box">
	<h1>HTML代码转换为JavaScript字符串</h1>

	<!-- 主内容 start -->
	    <textarea id="txt7" placeholder="HTML代码转换为JavaScript字符串()"></textarea>
	      <div class="btn_box">
          <v-btn btnText="转为单引号" @click.native="plural"></v-btn>
          <v-btn btnText="转为双引号" @click.native="single"></v-btn>
	      	<label for="arrays-sel"><input type="checkbox" checked="checked" id="arrays-sel"/> 数组拼接</label>
	      </div>
	    <textarea id="txt8"></textarea>
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
  	// 单引号
  	single:function(){
  		console.log("single");

  		var isArraySel = $("#arrays-sel").prop("checked");
  		var htmlArr = $("#txt7").val().replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").replace(/\"/g, "\\\"").split('\n');
  		var len = htmlArr.length;
  		var outArr = [];
  		if (isArraySel) {
  		    outArr.push("[");
  		    jQuery.each(htmlArr, function (index, value) {
  		        if (value !== "") {
  		            if (index === len - 1) {
  		                outArr.push("\"" + value + "\"");
  		            } else {
  		                outArr.push("\"" + value + "\",\n");
  		            }
  		        }

  		    });
  		    outArr.push("].join(\"\");");
  		} else {
  		    jQuery.each(htmlArr, function (index, value) {
  		        if (value !== "") {
  		            if (index === len - 1) {
  		                outArr.push("\"" + value + "\";");
  		            } else {
  		                outArr.push("\"" + value + "\"+\n");
  		            }
  		        }
  		    });
  		}
  		$("#txt8").val(outArr.join(""));


  	},
  	// 双引号
  	plural:function(){
  		console.log("plural");

  		var isArraySel = $("#arrays-sel").prop("checked");
  		var htmlArr = $("#txt7").val().replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").split('\n');
  		var len = htmlArr.length;
  		var outArr = [];
  		if (isArraySel) {
  		    outArr.push("[");
  		    jQuery.each(htmlArr, function (index, value) {
  		        if (value !== "") {
  		            if (index === len - 1) {
  		                outArr.push("\'" + value + "\'");
  		            } else {
  		                outArr.push("\'" + value + "\',\n");
  		            }
  		        }

  		    });
  		    outArr.push("].join(\"\");");
  		} else {
  		    jQuery.each(htmlArr, function (index, value) {
  		        if (value !== "") {
  		            if (index === len - 1) {
  		                outArr.push("\'" + value + "\';");
  		            } else {
  		                outArr.push("\'" + value + "\'+\n");
  		            }
  		        }
  		    });
  		}
  		$("#txt8").val(outArr.join(""));

  	}
  },
  // 组件渲染完成执行
  mounted:function(){
    console.log($("body").height());
  }
}
</script>

