import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/torneo',
    name: 'Torneo',
    component: () => import(/* webpackChunkName: "torneo" */ '../views/Torneo.vue')
  },
  {
    path: '/ciegas',
    name: 'Ciegas',
    component: () => import(/* webpackChunkName: "ciegas" */ '../views/Ciegas.vue')
  },
  {
    path: '/pendientes',
    name: 'Pendientes',
    component: () => import(/* webpackChunkName: "pendientes" */ '../views/Pendientes.vue')
  },
  {
    path: '/desafiar',
    name: 'Desafiar',
    component: () => import(/* webpackChunkName: "desafiar" */ '../views/Desafiar.vue')
  },
  {
    path: '/amigoDesafiado',
    name: 'AmigoDesafiado',
    component: () => import(/* webpackChunkName: "amigoDesafiado" */ '../views/AmigoDesafiado.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
