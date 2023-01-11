import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { createI18n } from 'vue-i18n';
import languageComponent from "@/components/languageComponent";

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
        }
    }
}
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'fr',
    messages,

})
createApp(App).use(router).use(i18n).component('LanguageComponent', languageComponent).mount('#app')