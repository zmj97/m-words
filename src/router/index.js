import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Item from '../page/Item.vue'
import Result from '../page/Result.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
