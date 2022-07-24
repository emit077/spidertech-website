import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    meta: {title: "Home"},
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingPage')
  },
  {
    path: '/about-us',
    name: 'about_us',
    meta: {title: "About Us"},
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs')
  },
  {
    path: '/contact-us',
    name: 'contact_us',
    meta: {title: "Contact Us"},
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs')
  },
  {
    path: '/blogs',
    name: 'blogs',
    meta: {title: "Blogs"},
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
