import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Page from './views/Page.vue'
import Hier from './views/Hier.vue'
import Home from './views/Home.vue'
import Aujourdhui from './views/Aujourdhui.vue'
import Voir from './views/Voir.vue'
import Creer from './views/Creer.vue'
import Transformer from './views/Transformer.vue'
import Menu from './views/Menu.vue'
import Idee from './views/Idee.vue'
import Accueil from './views/Accueil.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   
    {
      path: '/',
      redirect: {
         path: '/accueil', 
         name: 'accueil', 
         component: Accueil
      }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      // main-nav
      path: '/hier/:uid',
      name: 'hier',
      component: Hier
    },
    {
      path: '/aujourdhui/:uid',
      name: 'aujourdhui',
      component: Aujourdhui
    },
    {
      path: '/voir/:uid',
      name: 'voir',
      component: Voir
    },
    {
      path: '/creer/:uid',
      name: 'creer',
      component: Creer
    },
    {
      path: '/creer/:uid/:exposant',
      name: 'creer',
      component: Creer
    },
    {
      path: '/transformer/:uid',
      name: 'transformer',
      component: Transformer
    },
    {
      path: '/idee/:uid',
      name: 'idee',
      component: Idee
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
