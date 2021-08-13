import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

import Login from './components/Login'
import MemberList from './components/MemberList'

import vuetify from './plugins/vuetify'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)


const router = new VueRouter({
  routes: [
     {
        name: 'Login',
        path: '/Login',
        component: Login,
     },
     {
        path: '/',
        component: MemberList,
        meta: {
          requireLogin: true
        },
        beforeEnter: (to, from, next) => {
          if (!sessionStorage.authenticated) {
            next({ name: 'Login' })
          } else {
            next()
          }
        }
     }
  ],
})

Vue.config.productionTip = false

new Vue({
   router,
   vuetify,
   render: h => h(App)
}).$mount('#app')

// router.replace('/login')
