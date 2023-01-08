import {createRouter, createWebHistory} from "vue-router"
import inventoryItem from "@/components/inventoryItem";
import loginPage from "@/components/loginPage";
import stockItem from "@/components/stockItem";
import reportsPage from "@/components/reportsPage";


const routes = [
    {
        path: "/",
        name: "Login",
        component: loginPage
    },
    {
        path: "/inventory",
        name: "Inventory",
        component: inventoryItem
    },
    {
        path: "/stock",
        name: "Stock",
        component: stockItem
    },
    {
        path: "/reports",
        name: "Report",
        component: reportsPage
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;