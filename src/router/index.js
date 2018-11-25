import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import emergency from '@/components/emergency'

Vue.use(Router)

export default new Router({
    mode: 'history', // to remove # from the end of urls
    routes: [
        {
            path: "/",
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/emergency',
            name: 'emergency',
            component: emergency
        }
    ]
})