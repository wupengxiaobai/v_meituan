import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PageA from '../components/page/pageA.vue'
import PageB from '../components/page/pageB.vue'

var routes = [{
  path:'/pagea',
  component: PageA
},{
  path:'/pageb',
  component: PageB
}]

var router = new VueRouter({
  routes
})

export default router