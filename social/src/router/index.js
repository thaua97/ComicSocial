import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Cadastro from '@/pages/cadastro/Cadastro'
import Perfil from '@/pages/perfil/Perfil'
import Main from '@/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page'
})
