<template>
  <div class="tool_box">
    <h1>{{ this.$route.meta.title }}</h1>
    <iframe
      style="width: 100%; height: 550px;"
      scrolling="no"
      frameborder="no"
      src="https://daneden.github.io/animate.css/"
    ></iframe>
    <p>
      源码地址：
      <a
        href="https://github.com/daneden/animate.css/blob/master/animate.css"
      >https://github.com/daneden/animate.css/blob/master/animate.css</a>
    </p>
    <p>
      正式地址：
      <a href="https://daneden.github.io/animate.css/">https://daneden.github.io/animate.css/</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.tool_box {
  font-size: 20px;
  padding: 20px;
  color: #000;
  p {
    margin: 10px 0;
  }
}
</style>