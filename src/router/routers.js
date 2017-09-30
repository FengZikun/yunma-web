/**
 * Created by LUO on 2017/3/21.
 */
import Hello from '../components/Hello'
import header from '../components/header'
import footer from '../components/footer'
import shouye from '../components/shouye'
import about from '../components/about'
import agent from '../components/agent'
import application from '../components/application'
import product from '../components/product'
import register from '../components/register'
import union from '../components/union'
import test from '../components/test'
import signIn from '../components/signIn'
//编写路由集合

const routers =[
    {
      path: '/',
      component:Hello,
      children:[
      	{
      		path:'shouye',
      		component:shouye
      	},
        {
          path:'about',
          component:about
        },
        {
          path:'agent',
          component:agent
        },
        {
          path:'agent',
          component:agent
        },
        {
          path:'application',
          component:application
        },
        {
          path:'product',
          component:product
        },
      	{
      		path:'register',
      		component:register
      	},
        {
          path:'union',
          component:union
        },
        {
          path:'signIn',
          component:signIn
        },
      ]
    },
  ]
  //导出路由集合
export default routers