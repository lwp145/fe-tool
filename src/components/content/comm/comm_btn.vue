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
		background: #51a3dd;
		border:none;
	}
</style>
