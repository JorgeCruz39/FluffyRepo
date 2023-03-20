
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsVue from '@/views/Products.vue'
import LoginVue from '@/views/Login.vue'
import { useSession } from '@/model/session'
import usersview from '@/views/UsersView.vue'
import MyActivity from '@/views/MyActivity.vue'
import FriendsView from '@/views/FriendsView.vue'
import stats from '@/views/stats.vue'
import PeopleSearch from '@/views/PeopleSearch.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/homeview', name: 'home', component: HomeView },
    { path: '/products', name: 'products', component: ProductsVue, beforeEnter: secureRoute },
    { path: '/login', name: 'login', component: LoginVue },
    { path: '/usersview', name: 'users', component: usersview, beforeEnter: secureRoute },
    { path: '/MyActivity', name: 'MyActivity', component: MyActivity },
    { path: '/FriendsView', name: 'FriendsActivity', component: FriendsView },
    { path: '/stats', name: 'stats', component: stats },
    { path: '/FriendsView', name: 'FriendsActivity', component: FriendsView },
    { path: '/PeopleSearch', name: 'PeopleSearch', component: PeopleSearch },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext ) {
    const session = useSession();
    if (session.user?.token === 'admin') {
        next()
    } else { 
        next('/login')
    }
}