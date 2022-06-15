import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Drink from '../views/Drink.vue'
import Drinks from '../views/Drinks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drinks/:searchterm',
    name: 'Drinks',
    component: Drinks
  },
  {
    path: '/drink/:drinkID',
    name: 'Drink',
    component: Drink
  },
  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  routes
})

export default router
