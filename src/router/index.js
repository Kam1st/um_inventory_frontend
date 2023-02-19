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
import employeeDetails from "@/components/employeeDetails";
import { authGuard } from "@auth0/auth0-vue";
import stockItemLists from "@/components/stockItemLists";
import editOrder from "@/components/editOrder";

const routes = [
    {
        path: "/",
        name: "Login",
        component: loginPage,
        beforeEnter: authGuard,
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

        path: "/stock/lists",
        name: "StockItemLists",
        component: stockItemLists,
        beforeEnter: authGuard,
    },
    {
        path: "/orders",
        name: "Orders",
        component: ordersPage,
        beforeEnter: authGuard,
    },
    {
        path: "/orders/new",
        name: "OrderForm",
        component: orderForm,
        beforeEnter: authGuard,
    },
    {
        path: "/orders/edit",
        name: "EditOrder",
        component: editOrder,
        beforeEnter: authGuard
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