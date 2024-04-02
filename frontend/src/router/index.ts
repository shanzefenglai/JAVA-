import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
    {
        path: '/', 
        redirect: '/home'
    },
    {
        path: '/home', 
        component: () => import('../components/Home.vue'),
        name: 'home'
    },
    {
        path: '/list', 
        name: 'list',
        redirect: '/list/latest',
        children: [
            {
                path: '/list/latest',
                component: () => import('../components/LatestList.vue'),
                name: 'latestList'
            },
            {
                path: '/list/best',
                component: () => import('../components/BestList.vue'),
                name: 'bestList'
            }
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../components/Search.vue')
    }
]


const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router

