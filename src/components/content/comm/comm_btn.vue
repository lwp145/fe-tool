<template>
  <button>{{btnText}}</button>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
button {
  min-width: 150px;
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background: rgb(64, 158, 255);
  border: none;
}
</style>
