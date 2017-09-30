<template>
  <div id="About">
	About
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../css/about.css';
</style>

<script>
  export default {
  // name: 'About',
  data () {
    return {
      msg: 'this is About'
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