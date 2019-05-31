import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Katex from './views/Katex'
import Editor from './views/Editor'
import File from './views/File'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/katex',
      name: 'Katex',
      component: Katex
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/file',
      name: 'File',
      component: File
    }
  ]
})
