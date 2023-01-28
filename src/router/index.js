import {createRouter, createWebHistory} from "vue-router"
import loginPage from "@/components/loginPage";
import stockItem from "@/components/stockItem";
import ordersPage from "@/components/ordersPage";
import stockItemDetails from "@/components/stockItemDetails";
import stockItemForm from "@/components/stockItemForm";
import clientForm from "@/components/clientForm";
import clientPage from "@/components/clientPage";
import orderForm from "@/components/orderForm";
import employeePage from "@/components/employeePage";
import employeeForm from "@/components/employeeForm";


const routes = [
    {
        path: "/",
        name: "Login",
        component: loginPage
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
    },
    {
        path: "/orders/new",
        name: "OrderForm",
        component: orderForm
    },
    {

        path: "/stock/stockItemDetails",
        name: "StockItemDetails",
        component: stockItemDetails
    },
    {
        path: "/clients/new",
        name: "ClientForm",
        component: clientForm
    },
    {
        path: "/clients",
        name: "ClientPage",
        component: clientPage
    },
    {
        path: "/employees",
        name: "Employees",
        component: employeePage
    },
    {
        path: "/employees/new",
        name: "EmployeesForm",
        component: employeeForm
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;