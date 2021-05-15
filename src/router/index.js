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
    path: '/desafiar',
    name: 'Desafiar',
    component: () => import(/* webpackChunkName: "desafiar" */ '../views/Desafiar.vue')
  },
  {
    path: '/amigoDesafiado',
    name: 'AmigoDesafiado',
    component: () => import(/* webpackChunkName: "amigoDesafiado" */ '../views/AmigoDesafiado.vue')
  },
  {
    path: '/agregarAmigo',
    name: 'AgregarAmigo',
    component: () => import(/* webpackChunkName: "agregarAmigo" */ '../views/AgregarAmigo.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
  },
  {
    path: '/partida',
    name: 'Partida',
    component: () => import(/* webpackChunkName: "partida" */ '../views/Partida.vue')
  },
  {
    path: '/clasificacion',
    name: 'Clasificacion',
    component: () => import(/* webpackChunkName: "clasificacion" */ '../views/Clasificacion.vue')
  },
  {
    path: '/partidasEnCurso',
    name: 'PartidasEnCurso',
    component: () => import(/* webpackChunkName: "clasificacion" */ '../views/PartidasEnCurso.vue')
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: () => import(/* webpackChunkName: "configuracion" */ '../views/Configuracion.vue')
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import(/* webpackChunkName: "tutorial" */ '../views/Tutorial.vue')
  },
  {
    path: '/finPartida',
    name: 'FinPartida',
    component: () => import(/* webpackChunkName: "finPartida" */ '../views/FinPartida.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
