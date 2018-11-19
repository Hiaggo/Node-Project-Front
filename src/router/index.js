import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
    mode: 'history', // to remove # from the end of urls
    routes: [
        {
            path: "/",
            name: 'home',
            component: home
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})