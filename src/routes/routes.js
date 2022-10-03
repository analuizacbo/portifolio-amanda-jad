import Home from '@/components/pages/Home.vue'
import Sobre from '@/components/pages/Sobre.vue'
import Contato from '@/components/pages/Contato.vue'


export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    },
]