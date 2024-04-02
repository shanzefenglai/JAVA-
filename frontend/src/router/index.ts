import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../components/Home.vue'
import LatestList from '../components/LatestList.vue'
import BestList from '../components/BestList.vue'
import Search from '../components/Search.vue'

const routes = [
    {
        path: '/', 
        redirect: '/home'
    },
    {
        path: '/home', 
        component: Home,
        name: 'home'
    },
    {
        path: '/list', 
        name: 'list',
        redirect: '/list/latest',
        children: [
            {
                path: '/list/latest',
                component: LatestList,
                name: 'latestList'
            },
            {
                path: '/list/best',
                component: BestList,
                name: 'bestList'
            }
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
]


const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router

