<template>
  <div id="Herder" class="div-over header">
    <div class="logo-out">
      <div class="logo-desktop"></div>
    </div>
    <div class="nav-out">
      <ul class="nav-list nav-desktop">
          <router-link to='/shouye' class="nav-li-desktop" id='test'><li>首页</li></router-link>
          <router-link to='/product' class="nav-li-desktop"><li>产品档案</li></router-link>
          <router-link to='/application' class="nav-li-desktop"><li>应用场景</li></router-link>
          <!-- <router-link to='/union' class="nav-li-desktop"><li>企业联盟</li></router-link> -->
          <router-link to='/register' class="nav-li-desktop"><li>申请入驻</li></router-link>
          <router-link to='/agent' class="nav-li-desktop"><li>代理商招募</li></router-link>
          <!-- <router-link to='/about' class="nav-li-desktop"><li>关于我们</li></router-link> -->
      </ul>      
    </div>
    <div class="login-out">
      <a href="javascript:void(0)" class="login-desktop">登录</a>
      <router-link to="/signIn" class="register-desktop">注册</router-link>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../css/header.css';
</style>

<script>
  export default {
  // name: 'Header',
  data () {
    return {
      msg: 'this is Header',
    }
  },

  methods:{
    init:function(){
      var clientWidth = document.body.clientWidth;
      var clientHeight = document.body.clientHeight;
      // $('.nav-li-desktop').on('click',(e)=>{
      //   $('.nav-li-desktop').removeClass('nav-li-desktop-on');
      //   $(e.target).parent().addClass('nav-li-desktop-on');
      // })
      if(clientWidth<clientHeight){
        $('.nav-list').removeClass('nav-desktop').addClass('nav-phone')
      }
    },
  },
  mounted:function(){
    this.init();
  }
}
</script>