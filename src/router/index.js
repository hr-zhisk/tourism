import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

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
