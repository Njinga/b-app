import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import Examples from '../views/Examples.vue'
import Exercises from '../views/Exercises.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
       {
                path: '/notes',
                name: 'Notes',
                component: Notes

        },

            {
                path: '/examples',
                name: 'Examples',
                component: Examples

            },

            {
                path: '/exercises',
                name: 'Exercises',
                component: Exercises

            },
        
   
   
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
