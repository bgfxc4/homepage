import { createRouter, createWebHistory } from 'vue-router'
import LogoAnimation from "@/components/LogoAnimation.vue"
import Projects from "@/components/Projects.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	{
		path: '/',
		name: 'Home',
		component: LogoAnimation,
		meta: {verticalIdx: 0}
	},
	{
		path: "/projects",
		name: "Projects",
		component: Projects,
		meta: {verticalIdx: 1}
	}
	/*{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue')
	}*/	
	]
})

router.afterEach((to, from) => {
	to.meta.transitionName = to.meta.verticalIdx < from.meta.verticalIdx ? 'slide-up' : 'slide-down'
	if (from.name == undefined) to.meta.transitionName = ""
})


export default router
