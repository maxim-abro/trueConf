import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/red',
        name: 'red',
        component: ()=> import('../views/Red'),
        meta: {
            active: 'red',
            from: '',
        }
    },
    {
        path: "/yellow",
        name: 'yellow',
        component: ()=> import('../views/Yellow'),
        meta: {
            active: 'yellow',
            from: '',
        }
    },
    {
        path: '/green',
        name: 'green',
        component: ()=> import('../views/Green'),
        meta: {
            active: 'green',
            from: '',
        }
    }]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next)=> {
    if (to.path == '/') {
        next('/red')
    }
    to.meta.from = from.name
    next()
})


export default router