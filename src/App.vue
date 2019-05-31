<template>
  <div id="app">
      <!-- <h1>{{ $store.state.count }}</h1> -->
      <v-header></v-header>
      <v-content></v-content>
      <v-footer></v-footer>
  </div>
</template>
<script>
// import $ from 'jquery'
import header from './components/header/header.vue'
import content from './components/content/content.vue'
import footer from './components/footer/footer.vue'

import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  name: 'app',
  data(){
    return {

    }
  },
  components: {
    'v-header':header,
    'v-content':content,
    'v-footer':footer
  },
  methods:{
    onClickMe:function(){
      console.log(2);
    }
  },
  // 组件渲染完成执行
  mounted:function(){
    // 给content计算高度
    var contHeight = $(window).height() - $("#footer").outerHeight() - $("#header").outerHeight();
    $(".content").css("height",contHeight -1);

    $(window).resize(function(){
       // 给content计算高度
       var contHeight = $(window).height() - $("#footer").outerHeight() - $("#header").outerHeight();
       $(".content").css("height",contHeight - 1);
    });
  }
}
</script>

<style>
#app {
  font-family:'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f0f0f0;
  width:100%;
  border-top: 1px solid #444444;
  /*font-size: 0;*/
}
#app h1{font-size: 20px;}
</style>
