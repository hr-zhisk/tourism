import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
	//首页路径
  {
    path: '/',
    name: 'Index',
    component: Index
	},
	//开发页路径 懒加载
	{
		path:"/developing",
		name: 'Developing',
		component:()=> import(/* webpackChunkname: "developing" */ '../views/Developing.vue')
	},
	//登录页面，懒加载
	{
		path:"/login",
		name:'Login',
		component:()=>import(/* webpackChunkName:"login" */ '../views/Login.vue')
	},
	//注册页面，懒加载
	{
		path:"/register",
		name:'Register',
		component:()=>import(/* webpackChunkName:"register" */ '../views/Register.vue')
	},
  {
    path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
