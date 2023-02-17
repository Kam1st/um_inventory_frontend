import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { createI18n } from 'vue-i18n';
import languageComponent from "@/components/languageComponent";
import { createAuth0 } from "@auth0/auth0-vue";
import authConfig from "../authConfig.json";
const app = createApp(App);

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
            employee_name_label: 'Employee Name',
            client_address_label: 'Client Address',
            client_phone_label: 'Client Phone',
            update_details_button: 'Update',
            back_button: 'Back',
            delete_button: 'Delete',
        },

        app: {
            stock: 'Stock',
            orders: 'Orders',
            employees: 'Employees',
            clients: 'Clients',
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

            search: 'Chercher',

            order_id: 'Numéro de commande: ',

            add_order: 'Ajouter une commande',
            client_id: 'Numéro Client',
            items: 'Choisir Produits',
            quant: 'Nombre de produits: ',
            add_item: 'Ajouter le produit',
            add: 'Ajouter',
            back: 'Retour',
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
            employee_name_label: 'Nom de l\'Employee',
            client_address_label: 'Addresse',
            client_phone_label: '# de Telephone',
            update_details_button: 'Mettre a jour',
            back_button: 'Retour',
            delete_button: 'Supprimer le Client',
        },

        app: {
            stock: 'Produits',
            orders: 'Commandes',
            employees: 'Employés',
            clients: 'Clients',
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
    }
    },
}
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
).component('LanguageComponent', languageComponent).mount('#app')