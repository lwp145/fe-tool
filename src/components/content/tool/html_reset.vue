<template>
  <div class="tool_box">
    <h1>{{ this.$route.meta.title }}</h1>
    <textarea v-model="txt1" placeholder="html代码格式化"></textarea>
    <div class="btn_box">
      <v-btn btnText="html代码格式化" @click.native="html_reset"></v-btn>
    </div>
    <textarea v-model="txt2"></textarea>
  </div>
</template>

<script>
import comm_btn from '../comm/comm_btn.vue';
export default {
  components: {
    'v-btn': comm_btn
  },
  data() {
    return {
      txt1: '',
      txt2: ''
    };
  },

  methods: {
    html_reset() {
      const { txt1 } = this;
      var source = txt1;
      var sourceLength = source.length;
      if (sourceLength === 0) {
        alert('准备压缩的HTML不能为空！');
        return;
      }
      var rep = /\n+/g;
      var repone = /<!--.*?-->/gi;
      var reptwo = /\/\*.*?\*\//gi;
      var reptree = /[ ]+</gi; // 问题
      var sourceZero = source.replace(rep, '');
      var sourceOne = sourceZero.replace(repone, '');
      var sourceTwo = sourceOne.replace(reptwo, '');
      var sourceTree = sourceTwo.replace(reptree, '<');
      this.txt2 = sourceTree;
    }
  }
};
</script>

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