<template>
  <footer class="footer">
    Copyright © 2017 - {{ year }}
    <a href="http://www.chenzejiang.com" title="陈泽江的博客">webJ</a> All Rights Reserved
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #313d4c;
  border-bottom: 2px solid #434343;
  color: #848484;
  font-size: 14px;
  text-align: center;
  a {
    text-decoration: none;
    color: #ababab;
  }
}
</style>
