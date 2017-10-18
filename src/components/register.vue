<template>
  <div id="Register">

    <div class="masking" v-show='showWarn'>
      <div class="maskingBox" style="min-height: 280px;">
        <div class="classifyHeader">
          <span style="display:block;height:48px;line-height:48px;">操作提示</span>
        </div>
        <div class="warnmain">
          {{warnText}}
        </div>
        <div class="warnbottom">
          <input type="button" v-if="ifSuccess" class="delbutton" name="" value="确定" @click='backToSignIn'>
          <input type="button" v-else class="delbutton" name="" value="确定" @click='showWarn=false'>
        </div>
      </div>
    </div>
    <div class="masking" v-if='showMask'>
      <div class="maskingBox">
        <div class="top">
          <span class="cha" @click='giveUp'></span>
        </div>
        <div class="logo">

        </div>
        <div class="tip">
          <span class="striping"></span>
          <p style="display: inline-block;vertical-align: middle;color: #b6b6b6;margin: 0 10px;">填写注册账号</p>
          <span class="striping"></span>
        </div>
        <div class="tel">
          <input class="message-value" :class="{red:warn}" type="text" name="" placeholder="" v-model='accountNum' @focus='warn=false'>
        </div>
        <p v-if='occupy' style="color: red;height: 16px;line-height: 16px;margin: 2px 60px 5px;">用户名已被注册</p>
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
          <span class="form-item"><span class="red">*</span>账号：</span>
          <span>{{accountNum}}</span>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>密码：</span>
          <input type="password" name="" class="form-input" v-model='passwd'>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>厂商名称：</span>
          <input type="text" name="" class="form-input" v-model="vendorName">
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>所属行业：</span>
          <select v-model="industryName" class="form-input input-sm">
            <option>农产品</option>
            <option>畜牧养殖</option>
            <option>保健品</option>
            <option>医药</option>
            <option>医疗器械</option>
            <option>计算机硬件</option>
            <option>计算机软件</option>
            <option>通讯产品</option>
            <option>电子商务</option>
            <option>食品</option>
            <option>茶叶</option>
            <option>酒</option>
            <option>服饰皮具</option>
            <option>化妆品</option>
            <option>家用电器</option>
            <option>数码产品</option>
            <option>汽车配件</option>
            <option>汽车销售</option>
            <option>玩具礼品</option>
            <option>母婴用品</option>
            <option>农资产品</option>
            <option>体育用品</option>
            <option>成人用品</option>
            <option>床上用品</option>
            <option>珠宝</option>
            <option>线缆</option>
            <option>家具</option>
            <option>服务业</option>
            <option>金融投资</option>
            <option>电子电工</option>
            <option>旅游休闲</option>
            <option>安全防护</option>
            <option>印刷包装</option>
            <option>机械机电</option>
            <option>建筑建材</option>
            <option>冶金矿业</option>
            <option>石油化工</option>
            <option>水利水电</option>
            <option>交通运输</option>
            <option>综合性行业</option>
            <option>其他</option>
          </select>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>联系人：</span><input type="text" name="" class="form-input input-sm" v-model='contactName'>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>联系方式：</span><input type="text" name="" class="form-input input-sm" v-model='customPhone'>
        </p>
        <p>
          <span class="form-item"><span class="red">*</span>绑定邮箱：</span><input type="text" name="" class="form-input input-sm" v-model='vendorEmaill'>
        </p>
        <div>
          <span class="form-item"><span class="red">*</span>相关图片资料：</span>
          <form id='myform' enctype="multipart/form-data">
            <div class="phbox">
              <span class='photo' v-bind:style="{backgroundImage: imgSrcA}"></span>
              <p class="p">企业营业执照</p>
              <input type="file" name="tradeMarkImgUrl" style="display:none;" id="photoA" @change='change($event)'>
              <label for="photoA" class="button">上传图片</label>
            </div>
            <div class="phbox">
              <span class='photo'  v-bind:style="{backgroundImage: imgSrcB}"></span>
              <p class="p">商标注册证</p>
              <input type="file" name="tradeMarkLicense" style="display:none;" id="photoB" @change='change($event)'>
              <label for="photoB" class="button">上传图片</label>
            </div>
          </form>
          
        </div>
        <p class="form-submit-out">
          <a href="javascript:void(0)" class="form-submit" @click='commit'>提交</a>
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
      vendorName:null,
      imgSrcA:null,
      imgSrcB:null,
      contactName:null,
      industryName:null,
      customPhone:null,
      vendorEmaill:null,
      showWarn:false,
      warnText:null,
      ifSuccess:false,
      passwordReg:/^([0-9]|[a-zA-Z]){8,16}$/,
      maillReg:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      phoneReg:/^1[34578]\d{9}$/,
      occupy:false
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

    //同步显示图片
    change:function(eImg){
      const reader = new FileReader();
      if($(eImg.target).attr('id')=='photoA'){
        reader.onloadend = (e) =>
        {
          this.imgSrcA = `url('${e.target.result}')`;
        };
      };
      if($(eImg.target).attr('id')=='photoB'){
        reader.onloadend = (e) =>
        {
          this.imgSrcB = `url('${e.target.result}')`;
        };
      };
      reader.readAsDataURL(eImg.target.files[0]);

    },

    //提交
    commit(){
      var self=this;
      if(self.passwd===null){
        self.showWarn=true;
        self.warnText='请设置密码'
        return
      }
      if(!self.passwordReg.test(self.passwd)){
          self.showWarn=true;
          self.warnText='密码最少为8位，最多为16位';
          return
      }
      if(self.vendorName===null){
        self.showWarn=true;
        self.warnText='请输入厂家名称'
        return
      }
      if(self.industryName===null){
        self.showWarn=true;
        self.warnText='请选择所属行业'
        return
      }
      if(self.contactName===null){
        self.showWarn=true;
        self.warnText='请输入联系人姓名'
        return
      }
      if(self.customPhone===null){
        self.showWarn=true;
        self.warnText='请输入联系人电话'
        return
      }
      if(!self.phoneReg.test(self.customPhone)){
          self.showWarn=true;
          self.warnText='请输入合法的手机号';
          return
      }
      if(self.vendorEmaill===null){
        self.showWarn=true;
        self.warnText='请绑定邮箱'
        return
      }
      if(!self.maillReg.test(self.vendorEmaill)){
          self.showWarn=true;
          self.warnText='请输入合法的邮箱';
          return
      }
      var picData=new FormData($('#myform')[0]);
      picData.append('username',self.accountNum);
      picData.append('passwd',self.passwd);
      picData.append('vendorName',self.vendorName);
      picData.append('contactName',self.contactName);
      picData.append('industryName',self.industryName);
      picData.append('customPhone',self.customPhone);
      picData.append('vendorEmaill',self.vendorEmaill);
      $.ajax({
        url:'https://ym-a.top/cloud_code/POST/user/registvendorUser.do',
        type:'post',
        dataType:'json',
        data:picData,
        cache: false,
        processData: false,
        contentType: false,
        success:function(res){
          if(res.errorCode===0){
            self.showWarn=true;
            self.warnText=res.msg;
            self.ifSuccess=true;
          }
          else{
            self.showWarn=true;
            self.warnText=res.msg;
          }
        },
        error:function(res){
          console.log('error')
        }
      })
    },

    //返回登陆
    backToSignIn(){
      window.open('https://ym-a.top');
      router.go(-1);
    },
    //下一步
    next(){
      var self=this;
      $.ajax({
        url:'https://ym-a.top/cloud_code/GET/user/checkOutUserNameResult.do',
        type:'get',
        dataType:'json',
        data:{
          username:self.accountNum
        },
        success:function(res){
          console.log(res);
          if(res.errorCode===0){
            self.showMask=false;
            return
          }
          if(res.errorCode===-1){
            self.occupy=true;
            return
          }
        },
        error:function(res){
          console.log('error')
        }
      })
      
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