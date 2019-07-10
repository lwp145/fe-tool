<template>
  <div class="tool_box">
    <h1>{{ this.$route.meta.title }}</h1>
    <iframe
      style="width: 100%; height: 550px;"
      scrolling="no"
      frameborder="no"
      src="//tool.chenzejiang.com/static/iframe/colpick/index.html"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: {},
  methods: {
    colpick: function() {}
  }
};
</script>

<style lang="less" scoped>
.tool_box {
  font-size: 20px;
  padding: 20px;
  color: #000;
}
</style>