<template>
  <div class="tool_box">
    <h1>颜色选取</h1>
    <iframe
      style="width: 100%; height: 550px;"
      scrolling="no"
      frameborder="no"
      id="info"
      src="//tool.chenzejiang.com/static/iframe/colpick/index.html"
    ></iframe>
    <!-- 主内容 end -->
  </div>
</template>

<style lang="less" scoped>
.tool_box {
  font-size: 20px;
  padding: 20px;
  color: #000;
}
</style>

<script>
export default {
  name: "colpick",
  data() {
    return {};
  },
  methods: {
    colpick: function() {}
  },
  mounted: function() {}
};
</script>

