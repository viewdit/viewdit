import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export type RouteName = 
    | 'home'
    | 'subview'
    | 'post'
    | 'login'
    | 'user'
    | '404'

interface Route {
    name: RouteName,
    path: string,
    component: () => Promise<Vue.Component>,
    children?: Route[]
}

const routes: Route[] = [
    {
        name: 'home',
        path: '/',
        component: () => import('./pages/Home.vue')
    },
    {
        name: 'subview',
        path: '/v/:subview',
        component: () => import('./pages/Subview.vue'),
        children: [
            {
                name: 'post',
                path: ':post',
                component: () => import('./pages/Post.vue')
            }
        ]
    },
    {
        name: 'user',
        path: '/u/:id',
        component: () => import('./pages/Profile.vue')
    },
    {
        name: '404',
        path: '/:pathMatch(.*)*',
        component: () => import('./pages/PageNotFound.vue')
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})