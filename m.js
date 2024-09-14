//import {createApp} from 'vue'
//import './style.css'
//import App from './App.vue'
//import PrimeVue from 'primevue/config';
//import 'primeflex/primeflex.css';
//import Aura from '@primevue/themes/aura';
//import 'primeicons/primeicons.css';
//import Card from "primevue/card";
//import Toolbar from "primevue/toolbar";
//import i18n from "./i18n.js";

const app = createApp(App);

app.use(PrimeVue, {
    ripple: true, theme: {
        preset: Aura, options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.component('pv-card', Card)
    .component('pv-toolbar', Toolbar);

//app.use(i18n);

app.mount('#app');