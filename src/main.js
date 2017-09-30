// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router/router.js'
import $ from 'jquery'
import shouye from './components/shouye'
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
const store = new Vuex.Store({
	state:{
		loops: 0
	},
	mutations:{
		increment(state,data){
			state.loops=data;
		}
	}
})
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})