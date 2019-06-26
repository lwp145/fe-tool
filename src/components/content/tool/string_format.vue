<template>
  <div class="tool_box">
    <h1>字符串转换多种格式</h1>

    <div class="form-group">
      <label for="exampleInputPassword1">即将转换的内容</label>
      <input
        type="text"
        class="form-control"
        id="format_centent"
        v-model="textFormat"
        placeholder="请输入.."
      >
    </div>

    <div class="form-inline" v-bind:key="item.title" v-for="(item) in formarArr">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">{{item.title}}</div>
          <input type="text" class="form-control" v-bind:value="item.val">
          <div
            class="input-group-addon btn btn-primary"
            v-clipboard:copy="item.val"
            v-clipboard:success="onCopySuccess"
          >Copy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comm_btn from "../comm/comm_btn.vue";

export default {
  name: "string_format",
  data() {
    return {
      formarArr: [
        {
          title: "英文大写",
          prop: this.upperCase,
          val: ""
        },
        {
          title: "英文小写",
          prop: this.lowerCase,
          val: ""
        },
        {
          title: "字符串转unicode编码",
          prop: this.str2unicode,
          val: ""
        },
        {
          title: "unicode解码",
          prop: this.unicode2str,
          val: ""
        },
      ],
      textFormat: ""
    };
  },
  watch: {
    textFormat:function(_str) {
      const that = this;
      const res = this.formarArr.map((item) => {
        const obj = item;
        obj.val = item.prop(_str);
        return obj;
      });
      this.formarArr = res;
    }
  },
  computed: {
  },
  components: {
    "v-btn": comm_btn
  },
  methods: {
    onCopySuccess() {
      console.log("复制成功");
    },
    upperCase(_str) {
      return _str.toUpperCase();
    },
    lowerCase(_str) {
      return _str.toLowerCase();
    },
    /* 字符串转unicode编码 */
    str2unicode(_str) {
      var res = [];
      for (let i = 0; i < _str.length; i++) {
        res[i] = ("00" + _str.charCodeAt(i).toString(16)).slice(-4);
      }
      return res.length === 0 ? "" : "\\u" + res.join("\\u");
    },
    /* unicode解码 */
    unicode2str: function(_str) {
      _str = _str.replace(/\\/g, "%");
      _str = unescape(_str);
      _str = _str.replace(/%/g, "\\");
      _str = _str.replace(/\\/g, "");
      return _str;
    }
  },
  // 组件渲染完成执行
  mounted: function() {}
};
</script>


<style lang="less" scoped>
.tool_box {
  font-size: 20px;
  padding: 20px;
  color: #000;
  .form-inline {
    margin-bottom: 20px;
  }
  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }
}
</style>