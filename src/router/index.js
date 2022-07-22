import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingPage')
  },
  {
    path: '/about-us',
    name: 'about_us',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs')
  },
  {
    path: '/contact-us',
    name: 'contact_us',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogHome')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return {top: 0}
  },
})

export default router
