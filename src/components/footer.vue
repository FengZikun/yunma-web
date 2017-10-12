<template>
  <div id="Footer" class="div-over ym-footer">
    <div class="div-over foot-top">
      <div class="func-item">
        <div class="foot-item">
          <p class="item-title">关于云码</p>
          <router-link to='/product' class="item-list">产品档案</router-link>
          <router-link to='/application' class="item-list">应用场景</router-link>
        </div>
        <div class="foot-item">
          <p class="item-title">云码服务</p>
          <router-link to='/register' class="item-list">申请入驻</router-link>
          <router-link to='/agent' class="item-list">代理商招募</router-link>
        </div>
        <div class="foot-item2">
          <p class="item-title item2-p">联系我们</p>
          <p class="item-list item2-p">0755-26531153</p>
          <p class="item-list item2-p">深圳市宝安区西乡街道元匠坊3层</p>
          <p class="item-list item2-p">lw@csslink-cc.com</p>
        </div>
        <div class="foot-item3">
          <p class="item-title">友情链接</p>
          <a href="https://www.ym-a.top" class="item-list" target="_blank" >云码平台</a>
          <div style="height:86px;width:86px;;margin:0 auto;"><img src="../assets/yunma_code.jpg"></div>
        </div>
      </div>
    </div>  
    <div class="div-over foot-bottom">
      <div class="func-item" style="margin:0 auto">
        <p class="bottom-p">粤ICP备17040526号</p>
      </div>
    </div>	 
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../css/footer.css';
</style>

<script>
  export default {
  // name: 'Footer',
  data () {
    return {
      msg: 'this is Footer'
    }
  },

  methods:{
    init:function(){

    },
  },
  mounted:function(){
    this.init();
  }
}
</script>