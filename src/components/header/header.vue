<template>
  <div class="header clearfix" id="header">
    <h1><router-link to="/">Web前端工具箱</router-link></h1>
    <div class="userBox">
      <img src="static/images/user-pic/user-id-1.png" class="userLogo" alt="userName">
      <span class="userName">webJ</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
 .header{
  font-size: 0;
  width:100%;
  background: #373737;
  padding:0 5%;
  height: 60px;
  line-height: 60px;
  border-top:2px solid #434343;
  overflow: hidden;
   h1{
      font-size:30px;
      float: left;
      a{
        text-decoration: none;
        color: #9e9e9e;
        text-shadow: 0 0 4px #000;
      }
   }
   .userBox{
     float: right;
     background: #262626;
     height: 100%;
     text-align: center;
     width:200px;
     .userLogo{
        width:30px;
        height: 30px;
        border-radius: 100%;
        vertical-align: middle;
     }
     .userName{
       color: #dfdfdf;
       font-size: 16px;
       margin: 0 10px;
       vertical-align: middle;
       position: relative;
     }
     .userName:after{
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top:50%;
      right: -15px;
      transform:translate(0%,-30%);
      border-style: solid;
      border-width: 8px 5px 0 5px;
      border-color: #dfdfdf transparent transparent transparent;
     }
   }
 }
</style>
