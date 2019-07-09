<template>
  <div class="tool_box">
    <h1>CSS3兼容</h1>
    <textarea v-model="txt1"></textarea>
    <div class="btn_box">
      <v-btn btnText="兼容5大浏览器" @click.native="all_browser"></v-btn>
      <v-btn btnText="兼容webkit" @click.native="webkit_browser"></v-btn>
    </div>
    <textarea v-model="txt2"></textarea>
  </div>
</template>

<style lang="less" scoped>
.tool_box {
  font-size: 20px;
  padding: 20px;
  color: #000;
  .btn_box {
    margin: 10px 0;
  }
}
</style>

<script>
import comm_btn from "../comm/comm_btn.vue";
export default {
  data() {
    return {
      txt1: '',
      txt2: '',
      isOpacity: false,
    };
  },
  watch: {
    txt1(newVal) {
      this.isOpacity = newVal.substr(0, 7) === 'opacity' ? true : false;
    }
  },
  components: {
    "v-btn": comm_btn
  },
  methods: {
    all_browser: function() {
      let { txt1, isOpacity } = this;
      txt1 = txt1.substr(-1) !== ";" ?  `${txt1};` : txt1;
      this.txt2 = `-webkit-${txt1}\r\n-moz-${txt1}\r\n-ms-${txt1}\r\n-o-${txt1}\r\n${txt1}`;
      if (isOpacity) {
        let opacity_num = txt1.split(':')[1].replace(';', '');
        this.txt2 = `${txt1}\r\nfilter:alpha(opacity=${opacity_num * 100});`;
      }
    },
    webkit_browser: function() {
      let { txt1 } = this;
      txt1 = txt1.substr(-1) !== ";" ?  `${txt1};` : txt1;
      this.txt2 = `-webkit-${txt1}\r\n${txt1}`;
    }
  },
  mounted: function() {

  }
};
</script>

