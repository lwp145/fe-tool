<!-- 生成不同尺寸缩略图 -->
<!--  name: 'creat_img' -->
<template>
  <div class="tool_box">
	  <h1>生成不同尺寸缩略图</h1>
	  <!-- 主内容 start -->
     <input type="file"  id="demo_input" /> 
     <textarea id="result" rows="30" cols="300"></textarea> 
     <p id="img_area"></p>
     <button v-on:click="readFile">按钮</button>
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
  name: 'creat_img',
  data () {
    return {
       // input:document.getElementById("demo_input"),
       // result:document.getElementById("result"),
       // img_area:document.getElementById("img_area"),
       // aa:111
       base64:''
    }
  },
  methods:{
    // 生成文件
    readFile:function(){

       var input = document.getElementById("demo_input");  // 
       var result = document.getElementById("result");     // area文本框
       var img_area = document.getElementById("img_area"); // 显示出来的
       // 
       var file = input.files[0];
       // console.log(fiol);
       //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件 
       if (!/image\/\w+/.test(file.type)) {
           alert("请确保文件为图像类型");
           return false;
       }
       var reader = new FileReader();
       reader.readAsDataURL(file);
       var base64_str = '';
       reader.onload = function(e) {
           result.innerHTML = '<img src="' + this.result + '" alt=""/>';
           img_area.innerHTML = '<div class="sitetip">图片img标签展示：</div><img src="' + this.result + '" alt=""/>';
           base64_str = this.result;
           console.log(base64_str);
       }
       console.log("---------------------------");
       console.log(base64_str);
       // this.$set(this.base64,"111111")

       // console.log(this.base64);
    }
  },
  // 加载生成图片需要的方法插件
  beforeCreate:function(){
    
  },
  // 成功后
  mounted:function(){
    
  }
}
</script>

