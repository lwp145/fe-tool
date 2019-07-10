<template>
  <div class="tool_box">
    <h1>{{ this.$route.meta.title }}</h1>
    <div class="box">
      <p>
        <span>生成二维码的地址:</span>
        <input
          type="text"
          id="text"
          value="http://tool.chenzejiang.com"
          placeholder="http://tool.chenzejiang.com"
        />
      </p>
      <p>
        <span>宽度:</span>
        <input type="number" id="width" value="200" />
      </p>
      <p>
        <span>高度:</span>
        <input type="number" id="height" value="200" />
      </p>
      <p style="display: none;">
        <span>前景色:</span>
        <input type="text" id="foreground" value="#000" />
      </p>
      <p style="display: none;">
        <span>背景色:</span>
        <input type="text" id="background" value="#fff" />
      </p>

      <v-btn btnText="点击生成二维码" @click.native="qr_code"></v-btn>
      <div class="qrcode" id="qrcode"></div>

      <a href="http://www.bejson.com/convert/qrcode/" target="_blank">二维码解码地址</a>
    </div>
  </div>
</template>

<script>
import comm_btn from '../comm/comm_btn.vue';
import '../../../assets/js/qrcode';
export default {
  components: {
    'v-btn': comm_btn
  },
  data() {
    return {};
  },
  mounted() {
    this.qr_code();
  },
  methods: {
    /* 生成二维码 */
    qr_code: function() {
      let text_val = $('#text').val();
      const width_val = $('#width').val();
      const height_val = $('#height').val();
      const foreground_val = $('#foreground').val();
      const background_val = $('#background').val();
      $('#qrcode').html('');
      text_val = this.$options.methods.toUtf8(text_val);

      $('#qrcode').qrcode({
        render: 'canvas', // 设置渲染方式
        text: text_val, // 要编码的字符串
        width: width_val, // 定义宽度
        height: height_val, // 定义高度
        background: background_val, // 背景色
        foreground: foreground_val // 前景色
      });
    },
    toUtf8: function(str) {
      var out, i, len, c;
      out = '';
      len = str.length;
      for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x0001 && c <= 0x007f) {
          out += str.charAt(i);
        } else if (c > 0x07ff) {
          out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
          out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
        } else {
          out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
        }
      }
      return out;
    }
  }
};
</script>

<style lang="less" scoped>
.tool_box {
  font-size: 20px;
  padding: 20px;
  color: #000;
  p {
    margin-bottom: 10px;
    span {
      display: block;
    }
    input {
      width: 400px;
      height: 40px;
      margin: 5px 0;
      font-size: 18px;
      color: #666666;
      padding: 0 5px;
    }
  }
  .qrcode {
    margin: 20px 0;
  }
  .qrcode_btn {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #51a3dd;
    border: none;
  }
}
</style>
