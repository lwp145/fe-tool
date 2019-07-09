<template>
    <button>{{btnText}}</button>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{

  },
  props:['btnText'],
  mounted:function(){
  }
}
</script>

<style lang="less" scoped>
	button{
		min-width: 150px;
		height: 40px;
    padding:0 20px;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
    cursor:pointer;
		color: #fff;
		background: rgb(64, 158, 255);
		border:none;
	}
</style>
