<template>
  <div id="Test">
	Test
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../css/test.css';
</style>

<script>
  export default {
  // name: 'Test',
  data () {
    return {
      msg: 'this is Test'
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