<template>
  <div class="tool_box">
    <h1>{{ this.$route.meta.title }}</h1>
    <iframe style="width: 100%;min-width: 850px; height: 650px;" scrolling="no" frameborder="no" src="https://tinypng.com">
    </iframe>
    <p>正式地址：<a href="https://tinypng.com">https://tinypng.com</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    console.log(123);
  },
  methods: {
  }
};
</script>

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
