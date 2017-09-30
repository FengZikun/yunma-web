<template>
  <div id="Register">
    <div class="masking" v-if='showMask'>
      <div class="maskingBox">
        <div class="top">
          <span class="cha" @click='giveUp'></span>
        </div>
        <div class="logo">

        </div>
        <div class="tip">
          <span class="striping"></span>
          <p style="display: inline-block;vertical-align: middle;color: #b6b6b6;margin: 0 10px;">使用手机号/邮箱注册</p>
          <span class="striping"></span>
        </div>
        <div class="tel">
          <input class="message-value" :class="{red:warn}" type="text" name="" placeholder="输入手机号或邮箱" v-model='accountNum' @focus='warn=false'>
        </div>
        <div class="tel">
          <div class="slide">
            <p style="font-size: 16px;height: 36px;line-height: 36px;position: absolute;left: 50px;color: #4d4d4d;">请按住滑块，拖动到最右边</p>
            <div class="slideBox" @mousedown='move'>

            </div>
          </div>
        </div>
        <div class="commit" v-if="arrive">
          <p style="height: 36px;line-height: 36px;color: #fff;margin: auto;font-size: 16px;" @click='next'>注册</p>
        </div>
      </div>
    </div>
    <div class="div-over">
      <form class="register-form">
        <p class="form-title">欢迎来到云码互联平台！请完善您的信息。</p>
        <p>
          <span class="form-item"><span class="red">*</span>账号</span>
          <span>{{accountNum}}</span>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>密码</span>
          <input type="text" name="" class="form-input" v-model='passwd'>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>厂商名称</span>
          <input type="text" name="" class="form-input" v-model="vendorName">
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>所属行业</span>
          <select v-model="industryName">

          </select>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>联系方式</span><input type="text" name="" class="form-input input-sm">
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>相关图片资料</span>
        </p>
        <p class="form-submit-out">
          <a href="javascript:void(0)" class="form-submit">提交</a>
        </p>
        
      </form>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/register.css" scoped></style>

<script>
import router from '../router/router.js'
export default {
  // name: 'Register',
  data () {
    return {
      msg: 'this is Register',
      showMask:true,
      isMove:false,
      arrive:false,
      accountNum:null,
      warn:false,
      passwd:null,
      vendorName:null
    }
  },

  methods:{
    init:function(){

    },

    //滑块
    move(event){
      this.isMove=true;
      var self=this;
      var slideBox=$('.slideBox');
      var x = event.pageX - parseInt(slideBox.css('left'),10);
      var maxWidth=$('.slide').width() - slideBox.width();
      $(document).mousemove(function(event){
        var _x=event.pageX - x;
        if(_x>0 && _x<=maxWidth){
          slideBox.css('left',_x);
        }else if(_x > maxWidth&&self.accountNum!==null){
          self.arrive=true;
        }else if(_x > maxWidth&&self.accountNum===null){
          self.warn=true;
          slideBox.css('left',0);
        }
      }).mouseup(function(event){
        var _x=event.pageX - x;
        if(_x>0 && _x<=maxWidth){
          slideBox.css('left',0);
          slideBox.unbind('mousedown');
          
        }else if(_x==maxWidth){

        }
        $(document).unbind('mousemove');
        $(document).unbind('mouseup');
      })    
    },

    //下一步
    next(){
      this.showMask=false;
    },

    //放弃注册
    giveUp(){
      router.go(-1);
    }
  },
  mounted:function(){
    this.init();
  }
}
</script>