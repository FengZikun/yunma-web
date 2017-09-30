<template>
  <div id="Hello" class="left">
    <ym-header></ym-header>
    <router-view class='div-over'></router-view>
    <ym-footer></ym-footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/header.css" scoped></style>
<style src="../css/footer.css" scoped></style>
<script>
  import header from './header.vue'
  import footer from './footer.vue'

  export default {
  // name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Cloud Code'
    }
  },

  methods:{
    init:function(){

    },
  },
  mounted:function(){
    this.init();
  },
  components:{
    'ym-header':header,
    'ym-footer':footer
  },
}

</script>

