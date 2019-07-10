<template>
  <div class="tool_box">
    <h1>{{ this.$route.meta.title }}</h1>
    <section :key="index" v-for="(items, index) in index_data">
      <h2>
        <span>{{ index }}</span>
      </h2>
      <ul class="boxlist clearfix">
        <li :key="item.data_content" v-for="item in items">
          <a
            :href="item.link"
            target="_blank"
            data-toggle="popover"
            data-trigger="hover"
            data-container="body"
            data-placement="top"
            data-html="true"
            :data-content="item.data_content"
            :data-original-title="item.data_original_title"
          >{{ item.link_txt }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="less" scoped>
.tool_box {
  font-size: 20px;
  padding: 20px;
  color: #000;
  section {
    margin-bottom: 20px;
    h2 {
      margin-bottom: 20px;
      height: 30px;
      position: relative;
      font-size: 30px;
      font-weight: 500;
      line-height: 1.1;
      color: inherit;
      span {
        padding-right: 8px;
        line-height: 30px;
        color: #2288dd;
        background: #f0f0f0;
        font-size: 18px;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    h2:before {
      display: block;
      top: 15px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #ccc;
      content: "";
      z-index: 0;
      position: absolute;
    }
    ul {
      li {
        padding-left: 15px;
        width: 200px;
        height: 30px;
        overflow: hidden;
        float: left;
        position: relative;
        font-size: 14px;
        a {
          line-height: 30px;
          color: #000;
        }
      }
    }
  }
}
</style>
<script>
import index_data from '../../../assets/api/index.json';
export default {
  data() {
    return {
      index_data: index_data
    };
  },
  mounted() {
    $("[data-toggle='popover']").popover();
  },
  methods: {
  }
};
</script>

