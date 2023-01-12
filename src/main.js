import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { createI18n } from 'vue-i18n';
import languageComponent from "@/components/languageComponent";


// you can create a collection for the different pages, fr and en. in this example it's orders and login.
// and then, you call the variable of the collection you want.
// if you want the title of the login page: <h2 v-html="$t('login.title')"/>

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
            search: 'Search for Client',
            input: 'Client ID',
            button: 'Get Client',
            client_id_label: 'Client ID',
            client_name_label: 'Client Name',
            employee_name_label: 'Employee Name',
            client_address_label: 'Client Address',
            client_phone_label: 'Client Phone',
            update_details_button: 'Update',
            back_button: 'back',
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
            search: 'Rechercher un client',
            input: 'Identifiant Client',
            button: 'Obtenir le client',
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
createApp(App).use(router).use(i18n).component('LanguageComponent', languageComponent).mount('#app')