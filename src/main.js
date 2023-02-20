import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { createI18n } from 'vue-i18n';
import languageComponent from "@/components/languageComponent";
import { createAuth0 } from "@auth0/auth0-vue";
import authConfig from "../authConfig.json";
const app = createApp(App);
const Vue3Mq = require('vue3-mq');
import axios from 'axios';

const messages = {
    en: {
        orders: {
            title: 'Orders',
            new: 'New Order',

            orders_client_id: 'Get Orders By Client Id ',
            label_orders_client_id: 'Client Id ',

            orders_stock_id: 'Get Orders By Stock Item Id ',
            label_orders_stock_id: 'Stock Item Id ',

            search: 'Search',

            order_id: 'Order Id: ',

            add_order: 'Add Order',
            client_id: 'Enter Client Id',
            items: 'Select Stock Items',
            quant: 'Quantity Wanted: ',
            add_item: 'Add Item to Order',
            add: 'Add',
            back: 'Back',
            edit: 'Edit Order',
            data: 'Get Data',
            update: 'Update Order'

        },

        login: {
            title: 'Login',
            login: 'Login',
            logout: 'Logout'
        },

        clients: {
            title: 'Client Details',
            search: 'Search Client Profile',
            ordersClient: 'Search Orders Client',
            new: 'New Client',
            input: 'Client ID',
            buttonSearch: 'Search',
            client_id_label: 'Client ID',
            client_name_label: 'Client Name',
            employee_name_label: 'Employee In Charge',
            client_address_label: 'Address',
            client_phone_label: 'Phone Number',
            update_details_button: 'Update',
            delete_button: 'Delete',
            create: 'Create',
            back: 'Back',
        },

        app: {
            stock: 'Stock',
            orders: 'Orders',
            employees: 'Employees',
            clients: 'Clients',
            user_profile: 'Profile'
        },

        employees: {
            title: 'Employees',
            add: 'Add Employee',
            details: 'Details',

            name: 'Name',
            position: 'Position',
            date_hired: 'Date Hired',
            status: 'Status',
            add_emp: 'Add',
            back: 'Back',
        },

        profile: {
            nickname: 'Nickname: ',
            email: 'Email: ',
            is_verified: 'Is Email Verified: ',
            updated: 'Last Updated: '
        },

        stock: {
            title: 'Stock Items',
            lists: 'Produce Specific Lists',
            add_new: 'Add New Stock Item',
            stock_price: 'Get Stock Items By Price ',
            price: 'Price ',
            search: 'Search',
            stock_supplier: 'Get Stock Items By Supplier Name',
            supplier: 'Supplier ',
            pdf: 'Produce PDF of Stock',
            details: 'Details',
            all: 'All Products',

            stock_quantity: 'Get Stock Items By Quantity Sold',
            pdf_quant: 'Produce PDF',
            quant_client: 'Get Stock Items Sold By Client',
            client_id: 'Client Id ',

            stock_id: 'Stock Item Id',
            description: 'Description',
            cost: 'Cost Price',
            selling: 'Selling Price',
            quantity: 'Quantity In Stock',
            sold: 'Quantity Sold',
            back: 'Back',
            create: 'Add',
            update: 'Update',
            delete: 'Delete',
            data: 'Get Data'

        }
    },



    fr: {
        orders: {
            title: 'Commandes',
            new: 'Nouvelle Commande',

            orders_client_id: 'Commandes selon l\'identifiant client ',
            label_orders_client_id: 'Identifiant Client ',

            orders_stock_id: 'Commandes selon le code de produit ',
            label_orders_stock_id: 'Code Produit ',

            search: 'Rechercher',

            order_id: 'Numéro de commande: ',

            add_order: 'Ajouter une commande',
            client_id: 'Identifiant Client',
            items: 'Choisir Produits',
            quant: 'Nombre d\'unités: ',
            add_item: 'Ajouter le produit',
            add: 'Ajouter',
            back: 'Retour',
            edit: 'Modifier',
            data: 'Rechercher',
            update: 'Mettre à jour'
        },

        login: {
            title: 'Se connecter',
            login: 'Connexion',
            logout: 'Déconnexion',
        },

        clients: {
            title: 'Détails du client',
            search: 'Rechercher Un Profile Client',
            ordersClient: 'Commandes Client',
            new: 'Nouveau Client',
            input: 'Identifiant Client',
            buttonSearch: 'Rechercher',
            client_id_label: 'Identifiant Client',
            client_name_label: 'Nom du Client',
            employee_name_label: 'Employé en Charge',
            client_address_label: 'Addresse',
            client_phone_label: 'Numéro de Telephone',
            update_details_button: 'Mettre a jour',
            delete_button: 'Supprimer le Client',
            create: 'Ajouté',
            back: 'Retour',
        },

        app: {
            stock: 'Produits',
            orders: 'Commandes',
            employees: 'Employés',
            clients: 'Clients',
            user_profile: 'Profil'
        },

        employees: {
            title: 'Employés',
            add: 'Ajouter un employé',
            details: 'Détails',

            name: 'Nom',
            position: 'Position',
            date_hired: 'Date d\'embauche',
            status: 'Statut',
            add_emp: 'Ajouter',
            back: 'Retour',
         },

        profile: {
            nickname: 'Surnom: ',
            email: 'Email: ',
            is_verified: 'Email Verifié: ',
            updated: 'Date du dernier changement'
        },

        stock: {
            title: 'Liste de Produits',
            lists: 'Listes spécialisées',
            add_new: 'Ajouter un produit',
            stock_price: 'Produits selon le prix',
            price: 'Prix ',
            search: 'Rechercher',
            stock_supplier: 'Produits selon fournisseur',
            supplier: 'Fournisseur ',
            pdf: 'PDF liste de produits',
            details: 'Détails',
            all: 'Tout Les Produits',

            stock_quantity: 'Produits par quantité vendue',
            pdf_quant: 'Format PDF',
            quant_client: 'Quantité de produits vendus par client',
            client_id: 'Identifiant Client ',

            stock_id: 'Code Produit',
            description: 'Description',
            cost: 'Prix par unité',
            selling: 'Prix de vente',
            quantity: 'Quantité en inventaire',
            sold: 'Unité Vendus',
            back: 'Retour',
            create: 'Ajouter',
            update: 'Mettre à jour',
            delete: 'Supprimer'

        }
    },
}
axios.defaults.baseURL = 'https://um-inventory-6yaupwtesa-uc.a.run.app/';
                       //'http://localhost:8080/'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'fr',
    messages,

})
app.use(router).use(i18n).use(
    createAuth0({
        domain: authConfig.domain,
        client_id: authConfig.clientId,
        //authorizationParams: {
            //audience: authConfig.audience,
            redirect_uri: window.location.origin,
            //redirect_uri: authConfig.callbackUrl,
       // },
    })
).component('LanguageComponent', languageComponent).
component('MqResponsive', Vue3Mq.MqResponsive).mount('#app')

Vue3Mq.updateBreakpoints({
    preset: "bootstrap5"
})