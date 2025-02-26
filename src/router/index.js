
import {createRouter, createWebHistory} from "vue-router";

import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import ProductDetails from "@/pages/ProductDetails.vue"
import Basket from "@/pages/Basket.vue";



const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home,
    },
    {
        component: About,
        name: 'About',
        path: '/About'
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        props: true,
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;