import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:routers,//挂载路由集合
  scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
},
})
router.push('shouye');
router.afterEach(route =>{
	// console.log(document.getElementsByClassName('nav-li-desktop'));
	// var element=document.getElementsByClassName('nav-li-desktop')[0];
	console.log($('.router-link-exact-active'))
})
//导出router对象、
export default router