import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import base from '@/components/base'

Vue.use(Router)

export default new Router({
    mode: 'history', // to remove # from the end of urls
    routes: [{
            path: "/",
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: base,
        },
        {
            path: '/mts',
            name: 'mts',
            component: base
        },
        {
            path: '/emergency',
            name: 'emergency',
            component: base
        },
        {
            path: '/patient',
            name: 'patient',
            component: base
        },
        {
            path: '/discharged',
            name: 'discharged',
            component: base
        },
        {
            path: '/bloodstock',
            name: 'bloodstock',
            component: base
        },
        {
            path: '/profile',
            name: 'profile',
            component: base
        },
        {
            path: '/logout',

            redirect: { name: 'login' }
        }
    ]
})