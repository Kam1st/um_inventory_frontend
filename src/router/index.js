import {createRouter, createWebHistory} from "vue-router"
import loginPage from "@/components/loginPage";
import stockItem from "@/components/stockItem";
import ordersPage from "@/components/ordersPage";
import stockItemDetails from "@/components/stockItemDetails";
import stockItemForm from "@/components/stockItemForm";
import clientForm from "@/components/clientForm";
import clientPage from "@/components/clientPage";
import employeePage from "@/components/employeePage";
import employeeForm from "@/components/employeeForm";
import employeeDetails from "@/components/employeeDetails";
import { authGuard } from "@auth0/auth0-vue";
const routes = [
    {
        path: "/",
        name: "Login",
        component: loginPage
    },
    {
        path: "/stock",
        name: "Stock",
        component: stockItem,
        beforeEnter: authGuard,
    },
    {
        path: "/stock/stockItemDetails",
        name: "StockItemDetails",
        component: stockItemDetails,
        beforeEnter: authGuard,
    },
    {
        path: "/stock/new",
        name: "NewStockItem",
        component: stockItemForm,
        beforeEnter: authGuard,
    },
    {
        path: "/orders",
        name: "Orders",
        component: ordersPage,
        beforeEnter: authGuard,
    },
    {

        path: "/stock/stockItemDetails",
        name: "StockItemDetails",
        component: stockItemDetails,
        beforeEnter: authGuard,
    },
    {
        path: "/clients/new",
        name: "ClientForm",
        component: clientForm,
        beforeEnter: authGuard,
    },
    {
        path: "/clients",
        name: "ClientPage",
        component: clientPage,
        beforeEnter: authGuard,
    },
    {
        path: "/employees",
        name: "Employees",
        component: employeePage,
        beforeEnter: authGuard,
    },
    {
        path: "/employees/new",
        name: "EmployeesForm",
        component: employeeForm,
        beforeEnter: authGuard,
    },
    {
        path: "/employees/employeeDetails",
        name: "EmployeeDetails",
        component: employeeDetails,
        beforeEnter: authGuard,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;