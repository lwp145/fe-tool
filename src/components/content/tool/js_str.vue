<template>
  <div class="tool_box">
    <h1>HTML代码转换为JavaScript字符串</h1>
    <textarea v-model="txt1" placeholder="HTML代码转换为JavaScript字符串()"></textarea>
    <div class="btn_box">
      <v-btn btnText="转为单引号" @click.native="plural"></v-btn>
      <v-btn btnText="转为双引号" @click.native="single"></v-btn>
      <label for="arrays-sel">
        <input type="checkbox" checked="checked" v-model="isArraySel" /> 数组拼接
      </label>
    </div>
    <textarea v-model="txt2"></textarea>
  </div>
</template>

<script>
import comm_btn from "../comm/comm_btn.vue";
export default {
  data() {
    return {
      txt1: '',
      txt2: '',
      isArraySel: true,
    };
  },
  components: {
    "v-btn": comm_btn
  },
  methods: {
    /** 
     * 单引号
     */
    single: function() {
      let {txt1, isArraySel} = this;
      let htmlArr = txt1
        .replace(/\\/g, "\\\\")
        .replace(/\\/g, "\\/")
        .replace(/\'/g, "\\'")
        .replace(/\"/g, '\\"')
        .split("\n");
      let len = htmlArr.length;
      let outArr = [];
      if (isArraySel) {
        outArr.push("[");
        jQuery.each(htmlArr, function(index, value) {
          if (value !== "") {
            if (index === len - 1) {
              outArr.push('"' + value + '"');
            } else {
              outArr.push('"' + value + '",\n');
            }
          }
        });
        outArr.push('].join("");');
      } else {
        jQuery.each(htmlArr, function(index, value) {
          if (value !== "") {
            if (index === len - 1) {
              outArr.push('"' + value + '";');
            } else {
              outArr.push('"' + value + '"+\n');
            }
          }
        });
      }
      this.txt2 = outArr.join("");
    },
    /** 
     * 双引号
     */
    plural: function() {
      let {txt1, isArraySel} = this;
      let htmlArr = txt1
        .replace(/\\/g, "\\\\")
        .replace(/\\/g, "\\/")
        .replace(/\'/g, "\\'")
        .split("\n");
      let len = htmlArr.length;
      let outArr = [];
      if (isArraySel) {
        outArr.push("[");
        jQuery.each(htmlArr, function(index, value) {
          if (value !== "") {
            if (index === len - 1) {
              outArr.push("'" + value + "'");
            } else {
              outArr.push("'" + value + "',\n");
            }
          }
        });
        outArr.push('].join("");');
      } else {
        jQuery.each(htmlArr, function(index, value) {
          if (value !== "") {
            if (index === len - 1) {
              outArr.push("'" + value + "';");
            } else {
              outArr.push("'" + value + "'+\n");
            }
          }
        });
      }
      this.txt2 = outArr.join("");
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