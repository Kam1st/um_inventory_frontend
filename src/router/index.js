import {createRouter, createWebHistory} from "vue-router"
import inventoryItem from "@/components/inventoryItem";
import loginPage from "@/components/loginPage";
import stockItem from "@/components/stockItem";
import ordersPage from "@/components/ordersPage";
import stockItemDetails from "@/components/stockItemDetails";
import stockItemForm from "@/components/stockItemForm";

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
    },
    {
        path: "/stock/new",
        name: "NewStockItem",
        component: stockItemForm
    },
    {
        path: "/orders",
        name: "Orders",
        component: ordersPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;