import {createRouter, createWebHistory} from "vue-router"
import inventoryItem from "@/components/inventoryItem";
import loginPage from "@/components/loginPage";
import stockItem from "@/components/stockItem";
import stockItemDetails from "@/components/stockItemDetails";

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
        path: "/stock/stockItemDetails",
        name: "StockItemDetails",
        component: stockItemDetails
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;