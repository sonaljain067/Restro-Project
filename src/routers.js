import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddRestaurant from './components/AddRestaurant'
import UpdateRestaurant from './components/UpdateRestaurant'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddRes',
        component: AddRestaurant,
        path: '/add-res'
    },
    {
        name: 'UpdRes',
        component: UpdateRestaurant, 
        path: '/upd-res/:id'
    }
]
const router=createRouter({
    history: createWebHistory(),
    routes
})
export default router;