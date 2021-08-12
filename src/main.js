import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Login from './components/Login'
import MemberList from './components/MemberList'

import vuetify from './plugins/vuetify'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
     {
        path: '/Login',
        component: Login,
     },
     {
        path: '/',
        component: MemberList,
        meta: {
          requireLogin: true
        },
     }
  ],
})

Vue.config.productionTip = false

new Vue({
   router,
   vuetify,
   render: h => h(App)
}).$mount('#app')

router.replace('/login')
