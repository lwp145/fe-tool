<template>
  <div id="app">
    <v-header />
    <v-content />
    <v-footer />
  </div>
</template>
<script>
import vHeader from "./components/header/index";
import vContent from "./components/content/content.vue";
import vFooter from "./components/footer/index";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "v-header": vHeader,
    "v-content": vContent,
    "v-footer": vFooter
  },
  methods: {
    onClickMe: function() {
      console.log(2);
    }
  },
  mounted: function() {
  }
};
</script>

<style>
#app {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f0f2f5;
  width: 100%;
}
#app h1 {
  font-size: 20px;
}
</style>
