<template>
  <div id="Shouye">
	<div class="div-over">
		<div class="viewport" id="example">
			<div class="father clear-auto">
				<div class="ban"><img src="../assets/banner_1.png"></div>
				<div class="ban"><img src="../assets/banner_2.jpg"></div>
				<div class="ban banner3">
					<img src="../assets/banner_3.png">
					<div class="login-out">
						<p class="login-title">CCLINK</p>
						<p class="login-p">大数据 • 微营销+防伪系统</p>
						<div class="login-input">
							<input type="text" name="" class="input-in" placeholder="请输入用户名">
						</div>
						<div class="login-input">
							<input type="password" name="" class="input-in" placeholder="请输入密码">
						</div>
						<div class="submit">登录</div>
						<p class="register">免费注册</p>
					</div>
				</div>
				<div class="ban"><img src="../assets/banner_1.png"></div>
				<div class="ban"><img src="../assets/banner_2.jpg"></div>
			</div>
			<!-- <div class="jiantou-left" @click="bannerJump(-1)" ></div> -->
			<div class="mother">
				<a href="javascript:void(0)" @click="bannerOne"></a>
				<a href="javascript:void(0)" @click="bannerTwo"></a>
				<a href="javascript:void(0)" @click="bannerThree"></a>
				<a href="javascript:void(0)" @click="bannerFour"></a>
				<a href="javascript:void(0)" @click="bannerFive"></a>
			</div>
		</div>
	</div>
	<div class="div-over gray-fold">
		<div class="div-over func-title">
			<p class="func-all">我们的服务</p>
		</div>
		<div class="div-over">
			<div class="func-item">
				<div class="func-list">
					<div class="func-list-img func-list-img1"></div>
					<p class="func-list-title">企业联盟</p>
					<p class="func-list-item">企业互发奖品；企业互发优惠券</p>
					<p class="func-list-item">企业互发公告；企业互发互推</p>
				</div>
				<div class="func-list">
					<div class="func-list-img func-list-img5"></div>
					<p class="func-list-title">数据沉淀</p>
					<p class="func-list-item">商品流向；扫码数据；</p>
					<p class="func-list-item">用户行为；营销数据</p>
				</div>
				<div class="func-list">
					<div class="func-list-img func-list-img4"></div>
					<p class="func-list-title">互动营销+积分商城</p>
					<p class="func-list-item">积分礼品赠送；红包卡券发送；</p>
					<p class="func-list-item">抽奖、投票、H5；丰富积分兑换渠道</p>
				</div>
				<div class="func-list">
					<div class="func-list-img func-list-img3"></div>
					<p class="func-list-title">商品溯源</p>
					<p class="func-list-item">商品管理；流程管理；</p>
					<p class="func-list-item">装箱管理；发货管理</p>
				</div> 
				<div class="func-list">
					<div class="func-list-img func-list-img2"></div>
					<p class="func-list-title">防伪验真</p>
					<p class="func-list-item">一键生成防伪码；微信极速吸粉;</p>
					<p class="func-list-item">即时真伪反馈；假码溯源举报</p>
				</div>
			</div>
		</div>

	</div>
	<div class="div-over">
		<div class="div-over func-title">
			<p class="func-all">防伪系统介绍</p>
		</div>
		<div class="div-over">
			<div class="func-item">
				<div class="func-list2-1">
					<p class="func-list2-title">
                        What we do
                    </p>
					<p class="func-list2-p">云码<sup style="display:none;">TM</sup> 建立了一整套防伪体系，提供PC，微信一体的防伪解决方案，从防伪甄别、溯源管理到智能营销的全场景模式。用户通过微信扫一扫功能识别二维码，直接关注品牌公众微信同时公众微信立刻反馈查询商品信息，并给予真假，积分，礼品等信息的判断。为企业产品的品牌形象保驾护航！</p>
                    <p class="func-list2-p">云码<sup style="display:none;">TM</sup> 防伪以二维码为信息载体，对每一件商品的信息进行跟踪、采集、汇总、查询、管理等，不仅可以做到一品一码，还实现了一件一码，建立商品信息管理数据链和整个流通过程监管系统。基于SAAS（软件及服务）的理念，通过高性能低成本的大数据平台。客户无需自建平台，只需注册激活后，通过强大的云流程引擎和表单创建引擎，创建适合自己企业的溯源平台，追求最优经济的企业成本控制。</p>
                    <p class="func-list2-p">云码<sup style="display:none;">TM</sup> 防伪系统（微信版）涵盖五大模块：防伪云平台，商品溯源管理平台，互动营销平台，积分商城，大数据云服务。</p>
				</div>
				<div class="func-list2-2">
					<img src="../assets/whatwedo.png">
				</div>
			</div>
		</div>		
	</div>
	<div class="div-over">
		<div class="div-over func-title">
			<p class="func-all">我们的特色</p>
		</div>
		<div class="div-over">
			<div class="func-item">
				<div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_1.png">
					</div>
					<p class="func-list3-p">一键生成防伪码</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_2.png">
					</div>
					<p class="func-list3-p">绑定微信防伪又吸粉</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_3.png">
					</div>
					<p class="func-list3-p">个性化赋值方案</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_4.png">
					</div>
					<p class="func-list3-p">积分礼品赠送</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_5.png">
					</div>
					<p class="func-list3-p">假码溯源商品溯源</p>
				</div>				<div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_6.png">
					</div>
					<p class="func-list3-p">关联商品和顾客</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_7.png">
					</div>
					<p class="func-list3-p">好玩的营销应用</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_8.png">
					</div>
					<p class="func-list3-p">丰富的场景模板</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_9.png">
					</div>
					<p class="func-list3-p">丰富的积分兑换渠道</p>
				</div><div class="func-list3">
					<div class="func-list3-img">
						<img src="../assets/shouye_10.png">
					</div>
					<p class="func-list3-p">全面数据统计和报表导出</p>
				</div>
			</div>
		</div>
		<div class="div-over">
			<div class="func-item">
				<div class="func-list4">
					<div class="func-list4-left-img"><img src="../assets/teseimg-1.png"></div>
				</div><div class="func-list4">
					<p class="func-list4-right-title">微信吸粉神器</p>
					<p class="func-list4-right-p">一键生成二维码（含有丰富信息的参数二维码）</p>
					<p class="func-list4-right-p">微信扫码（微信扫一扫或者微信菜单内扫一扫）</p>
					<p class="func-list4-right-p">自动跳转关注企业微信</p>
					<p></p>
				</div><div class="func-list4">
					<p class="func-list4-left-title">真伪积分礼品互动一站式</p>
					<p class="func-list4-left-p">真伪结果推送</p>
					<p class="func-list4-left-p">积分情况、赠送礼品、附加信息、自定义广告等</p>
					<p class="func-list4-left-p">抽奖、投票调研多种互动</p>
				</div><div class="func-list4">
					<div class="func-list4-right-img"><img src="../assets/teseimg-2.png"></div>
				</div><div class="func-list4">
					<div class="func-list4-left-img"><img src="../assets/teseimg-3.png"></div>
				</div><div class="func-list4">
					<p class="func-list4-right-title">商品流向一目了然</p>
					<p class="func-list4-right-p">关联商品信息（商品编码、销售区域、购买链接）</p>
					<p class="func-list4-right-p">终端用户信息（终端设备、扫码区域、引导填写信息）</p>
					<p class="func-list4-right-p">多维度数据统计（商品流向报表统计、扫码数据、页面流量、用户行为统计、营销活动参与数据等）</p>
				</div>
			</div>
		</div>
	</div>
	<div class="div-over gray-fold">
		<div class="div-over func-title">
			<p class="func-all">轻松入驻 云码互联 进行零成本防伪</p>
		</div>
		<div class="div-over">
			<div class="func-item">
				<div class="func-list5">
					<div class="func-list5-title">1、注册、登录云码账号</div>
					<div class="func-list5-tr">手机号码验证注册</div>
					<div class="func-list5-tr">设置用户名和密码</div>
					<div class="func-list5-tr">忘记密码、重置密码</div>
					<div class="func-list5-tr"></div>
				</div><div class="func-list5">
					<div class="func-list5-title">2、开通品牌防伪、授权企业微信</div>
					<div class="func-list5-tr">企业实名认证</div>
					<div class="func-list5-tr">提交品牌资料</div>
					<div class="func-list5-tr">后台审核通过</div>
					<div class="func-list5-tr">微信授权成功</div>
				</div><div class="func-list5">
					<div class="func-list5-title">3、生成防伪码、赋值防伪码</div>
					<div class="func-list5-tr">一键生成防伪码</div>
					<div class="func-list5-tr">防伪码个性赋值</div>
					<div class="func-list5-tr">激活防伪码</div>
					<div class="func-list5-tr">二维码下载、印刷使用</div>
				</div><div class="func-list5">
					<div class="func-list5-title">4、数据跟踪、分析、导出</div>
					<div class="func-list5-tr">强大的数据跟踪管理能力</div>
					<div class="func-list5-tr">筛选数据、查看数据</div>
					<div class="func-list5-tr">数据分析</div>
					<div class="func-list5-tr">数据多报表导出</div>
				</div>
			</div>
<!-- 			<div class="func-item">
				<p class="func-list5-q">Q：如果我的二维码被仿冒企业复制怎么办？</p>
				<p class="func-list5-a">A：不用担心。我们的系统提供“扫后即焚”功能，即扫码一次立即失效。</p>
				<p class="func-list5-q">Q：如果仿冒企业复制我整套流程，我该如何处理？</p>
				<p class="func-list5-a">A：很简单。获得一个仿冒企业二维码，扫描获得仿冒企业公众微信，提交腾讯维权关闭其账号。那么流通在市场上所有的仿冒产品均无法走通流程。	</p>
				<p class="func-list5-q">Q：企业内部出现漏洞流出正版防伪码到市场上怎么办？</p>
				<p class="func-list5-a-last">A：云码防伪后台提供“禁用”功能，只要将问题防伪码按照序列号设置“禁用”即可。则终端用户扫描被禁用防伪码显示无法正常查询。</p>
				<a class="func-to-community" href="javascript:void(0)">进入社区</a>
			</div> -->
		</div>		
	</div>
	<div class="div-over">
		<div class="div-over func-title">
			<p class="func-all">入驻品牌</p>
		</div>
		<div class="div-over">
			<div class="func-item">
				<div class="custom-logo custom-logo1"></div>
				<div class="custom-logo custom-logo2"></div>
				<div class="custom-logo custom-logo3"></div>
				<div class="custom-logo custom-logo4"></div>
				<div class="custom-logo custom-logo5"></div>
				<div class="custom-logo custom-logo6"></div>
				<div class="custom-logo custom-logo7"></div>
				<div class="custom-logo custom-logo8"></div>
				<div class="custom-logo custom-logo9"></div>
				<div class="custom-logo custom-logo10"></div>
				<div class="custom-logo custom-logo11"></div>
				<div class="custom-logo custom-logo12"></div>
				<div class="custom-logo custom-logo13"></div>
				<div class="custom-logo custom-logo14"></div>
				<div class="custom-logo custom-logo15"></div>
				<div class="custom-logo custom-logo16"></div>
				<div class="custom-logo custom-logo17"></div>
				<div class="custom-logo custom-logo18"></div>
				<div class="custom-logo custom-logo19"></div>
				<div class="custom-logo custom-logo20"></div>
				<div class="custom-logo custom-logo21"></div>
				<div class="custom-logo custom-logo22"></div>
				<div class="custom-logo custom-logo23"></div>
				<div class="custom-logo custom-logo24"></div>
				<div class="custom-logo custom-logo25"></div>
				<div class="custom-logo custom-logo26"></div>
			</div>
		</div>
	</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../css/shouye.css" scoped></style>
<style src="../css/banner.css" scoped></style>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

  export default {
  // name: 'Shouye',
  data () {
    return {
      msg: 'this is Shouye',
      initNum:0,
      imgShow:0,
      imgWidth:null,
      imgLength:null,
      allLength:null,
      loop:null,
    }
  },
  // computed:{
  // 	loops(){
  //  		return this.$store.state.loops
  // 	}
  // },
  methods:{
    init:function(){
    	this.bannerInit();
    },
    // 轮播初始化
    bannerInit:function(){
    	var self=this;
    	window.clearInterval(self.$store.state.loops);
    	self.initNum=0;
    	self.imgShow=0;
    	self.imgWidth=null;
    	self.imgLength=null;
    	self.allLength=null;
    	self.loop=null;

    	$('.father').eq(0).css('transform',`translate3d(0, 0, 0)`);
    	$('.father').children().eq(0).css('transform',`translate3d(0, 0, 0)`);
    	$('.father').children().eq(1).css('transform',`translate3d(0, 0, 0)`);
    	$('.father').children().eq(2).css('transform',`translate3d(0, 0, 0)`);
    	$('.father').children().eq(3).css('transform',`translate3d(0, 0, 0)`);
    	$('.father').children().eq(4).css('transform',`translate3d(0, 0, 0)`);
    	$('.login-out').on('click',function(){
    		window.clearInterval(self.$store.state.loops);
    	})
    	self.imgWidth=parseInt($('.father').children().eq(1).css('width'));
    	self.imgLength=$('.father').children().length;
    	self.allLength=self.imgLength*self.imgWidth;
    	$('.father').eq(0).css('transform',`translate3d(${-1*self.imgWidth*2}px, 0, 0)`);

    	self.$store.commit('increment',setInterval(()=>{self.bannerLoop()},5000))
        

    },
    //无线轮播
    bannerLoop:function(){
    	var self=this;
    	self.initNum+=1;
    	$('.father').eq(0).css('transform',`translate3d(${-1*self.imgWidth*(self.initNum+2)}px, 0, 0)`);
    		let n=self.initNum%5;
    		// console.log(n)
    		switch (n) {
    			case 1:
    				$('.father').children().eq(0).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
    				break;
    			case 2:
    				$('.father').children().eq(1).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
    				break;
    			case 3:
    				$('.father').children().eq(2).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
    				break;
    			case 4:
    				$('.father').children().eq(3).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
    				break;
    			case 0:
    				$('.father').children().eq(4).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum)/self.imgLength))}px, 0, 0)`);
    				break;
    			case -0:
    				$('.father').children().eq(0).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum)/self.imgLength))}px, 0, 0)`);
    				break;
    			case -1:
    				$('.father').children().eq(4).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
    				break;
    			case -2:
    				$('.father').children().eq(3).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
    				break;
    			case -3:
    				$('.father').children().eq(2).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
    				break;
    			case -4:
    				$('.father').children().eq(1).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
    				break;
    			default:
    				// statements_def
    				break;
    		}	
    		
    },
    // 跳转轮播
    bannerJump:function(m){
    	var  self=this;
    	window.clearInterval(self.$store.state.loops);
    	if(m>0){
    		let i=1;
    		do{
   	    		self.initNum+=1;
	    		let n=self.initNum%5;
	    		switch (n) {
	    			case 1:
	    				$('.father').children().eq(0).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 2:
	    				$('.father').children().eq(1).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 3:
	    				$('.father').children().eq(2).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 4:
	    				$('.father').children().eq(3).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 0:
	    				$('.father').children().eq(4).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -0:
	    				$('.father').children().eq(0).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -1:
	    				$('.father').children().eq(4).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -2:
	    				$('.father').children().eq(3).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -3:
	    				$('.father').children().eq(2).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -4:
	    				$('.father').children().eq(1).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			default:
	    				// statements_def
	    				break;
	    		}
	    		i+=1;	
    		}while(i<=m)
    		self.$store.commit('increment',setInterval(()=>{self.bannerLoop()},5000))
    	}else{
    		let i=-1;
    		do{
   	    		self.initNum-=1;
	    		let n=self.initNum%5;
	    		switch (n) {
	    			case 1:
	    				$('.father').children().eq(1).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 2:
	    				$('.father').children().eq(2).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 3:
	    				$('.father').children().eq(3).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 4:
	    				$('.father').children().eq(4).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum+5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case 0:
	    				$('.father').children().eq(0).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -0:
	    				$('.father').children().eq(0).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -1:
	    				$('.father').children().eq(4).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -2:
	    				$('.father').children().eq(3).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -3:
	    				$('.father').children().eq(2).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			case -4:
	    				$('.father').children().eq(1).css('transform',`translate3d(${self.allLength*(parseInt((self.initNum-5)/self.imgLength))}px, 0, 0)`);
	    				break;
	    			default:
	    				// statements_def
	    				break;
	    		}
	    		i-=1;
    		}while(i>=m)
    		self.$store.commit('increment',setInterval(()=>{self.bannerLoop()},5000))
        

    	}
    	$('.father').eq(0).css('transform',`translate3d(${-1*self.imgWidth*(self.initNum+2)}px, 0, 0)`);
    },

    // 回到第一页
    bannerOne:function(){
    	var self=this;
    	let m=self.initNum%5;
    	// console.log(m);
		switch (m) {
			case 1:
		    	self.bannerJump(2)
				break;
			case 2:
		    	self.bannerJump(1)
				break;
			case 3:
		    	// self.bannerJump(-2)
				break;
			case 4:
				self.bannerJump(-1)
				break;
			case 0:
				self.bannerJump(-2)
				break;
			case -0:
				self.bannerJump(-2)
				break;
			case -1:
		    	self.bannerJump(-1)
				break;
			case -2:
		    	// self.bannerJump(2)
				break;
			case -3:
		    	self.bannerJump(1)
				break;
			case -4:
				self.bannerJump(2)
				break;
			default:
				// statements_def
				break;
		}

    },
    // 回到第二页
    bannerTwo:function(){
    	var self=this;
    	let m=self.initNum%5;
    	// console.log(m);
		switch (m) {
			case 1:
		    	self.bannerJump(-2)
				break;
			case 2:
		    	self.bannerJump(2)
				break;
			case 3:
		    	self.bannerJump(1)
				break;
			case 4:
				// self.bannerJump(-1)
				break;
			case 0:
				self.bannerJump(-1)
				break;
			case -0:
				self.bannerJump(-1)
				break;
			case -1:
		    	// self.bannerJump(-1)
				break;
			case -2:
		    	self.bannerJump(1)
				break;
			case -3:
		    	self.bannerJump(+2)
				break;
			case -4:
				self.bannerJump(-2)
				break;
			default:
				// statements_def
				break;
		}
    },
    // 回到第三页
    bannerThree:function(){
    	var self=this;
    	let m=self.initNum%5;
    	// console.log(m);
		switch (m) {
			case 1:
		    	self.bannerJump(-1)
				break;
			case 2:
		    	self.bannerJump(-2)
				break;
			case 3:
		    	self.bannerJump(2)
				break;
			case 4:
				self.bannerJump(1)
				break;
			case 0:
				// self.bannerJump(-2)
				break;
			case -0:
				// self.bannerJump(-2)
				break;
			case -1:
		    	self.bannerJump(1)
				break;
			case -2:
		    	self.bannerJump(2)
				break;
			case -3:
		    	self.bannerJump(-2)
				break;
			case -4:
				self.bannerJump(-1)
				break;
			default:
				// statements_def
				break;
		}
    },
    // 回到第四页
    bannerFour:function(){
    	var self=this;
    	let m=self.initNum%5;
    	// console.log(m);
		switch (m) {
			case 1:
		    	// self.bannerJump(+2)
				break;
			case 2:
		    	self.bannerJump(-1)
				break;
			case 3:
		    	self.bannerJump(-2)
				break;
			case 4:
				self.bannerJump(2)
				break;
			case 0:
				self.bannerJump(1)
				break;
			case -0:
				self.bannerJump(1)
				break;
			case -1:
		    	self.bannerJump(2)
				break;
			case -2:
		    	self.bannerJump(-2)
				break;
			case -3:
		    	self.bannerJump(-1)
				break;
			case -4:
				// self.bannerJump(+2)
				break;
			default:
				// statements_def
				break;
		}
    },
    // 回到第五页
    bannerFive:function(){
    	var self=this;
    	let m=self.initNum%5;
    	// console.log(m);
		switch (m) {
			case 1:
		    	self.bannerJump(1)
				break;
			case 2:
		    	// self.bannerJump(1)
				break;
			case 3:
		    	self.bannerJump(-1)
				break;
			case 4:
				self.bannerJump(-2)
				break;
			case 0:
				self.bannerJump(2)
				break;
			case -0:
				self.bannerJump(2)
				break;
			case -1:
		    	self.bannerJump(-2)
				break;
			case -2:
		    	self.bannerJump(-1)
				break;
			case -3:
		    	// self.bannerJump(+1)
				break;
			case -4:
				self.bannerJump(1)
				break;
			default:
				// statements_def
				break;
		}
    },
  },
  mounted:function(){
    this.init();
  }
}
</script>