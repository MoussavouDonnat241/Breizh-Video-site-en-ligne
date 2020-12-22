import {
    createRouter,
    createWebHistory
} from "vue-router";
import App from "../views/App.vue";
import Stock from "../views/Stock.vue";
import Error404 from "../views/404.vue";

const routes = [{
        path: "/",
        name: "App",
        component: App,
        meta: {
            title: "GMAC - Acceuil",
        },
    },
    {
        path: "/stock",
        name: "Stock",
        component: Stock,
        meta: {
            title: "GMAC - Stock",
        },
    },
    {
        path: "/:catchAll(.*)",
        component: Error404,
        meta: {
            title: "GMAC - 404",
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;