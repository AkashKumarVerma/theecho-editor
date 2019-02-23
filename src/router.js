import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Settings from './views/Settings.vue'
import Drafts from './views/Drafts.vue'
import Stories from './views/Stories.vue'
import Editor from './views/Editor.vue'
import Dashboard from './views/Dashboard.vue'
import Stats from './views/Stats.vue'
import ArticleEditor from './views/ArticleEditor.vue'
import Store from './store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if(Store.state.user.signedIn) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/drafts',
      name: 'drafts',
      component: Drafts
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/stories',
      name: 'stories',
      component: Stories
    },
  ]
})

export default router