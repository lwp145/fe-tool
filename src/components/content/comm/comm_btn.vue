<!-- 公共btn -->
<!--  name: 'btn' -->
<template>
	<!-- 主内容 start -->
    <button>{{btnText}}</button>
	<!-- 主内容 end -->
</template>

<style lang="less" scoped>
	button{
		min-width:150px;
		height: 40px;
    padding:0 20px;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
    cursor:pointer;
		color: #fff;
		background: #51a3dd;
		border:none;
		font-family:"Microsoft YaHei";
	}
</style>


<script>
export default {
  name: 'btn',
  data () {
    return {
      
    }
  },
  methods:{

  },
  props:['btnText'],
  // 组件渲染完成执行
  mounted:function(){
    console.log(this.btnText);
  }
}
</script>

