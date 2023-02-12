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

            orders_client_id: 'Get Orders By Client Id ',
            label_orders_client_id: 'Client Id ',
            placeholder_orders_client_id: 'Client Id ',

            orders_stock_id: 'Get Orders By Stock Item Id ',
            label_orders_stock_id: 'Stock Item Id ',
            placeholder_orders_stock_id: 'Stock Item Id ',
        },
        login: {
            title: 'Login'
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
        }
    },
    fr: {
        orders: {
            title: 'Commandes',

            orders_client_id: 'Commandes selon l\'identifiant client ',
            label_orders_client_id: 'Identifiant Client ',
            placeholder_orders_client_id: 'Identifiant Client ',

            orders_stock_id: 'Commandes selon le code de produit ',
            label_orders_stock_id: 'Code Produit ',
            placeholder_orders_stock_id: 'Code Produit ',
        },
        login: {
            title: 'Se connecter'
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
        }
    }
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
        redirect_uri: window.location.origin,
    })
).component('LanguageComponent', languageComponent).mount('#app')