import './promise-polyfill';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './components/App.vue';
import router from './router';
import store from './store';

{{#if_eq UIConfig "bfui"}}
import bfui from 'bfui';
import 'bfui/lib/theme-default/index.css';

Vue.use(bfui);
{{/if_eq}}
{{#if_eq UIConfig "ElementUI"}}
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
{{/if_eq}}
sync(store, router);
// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
    require('./pwa');
}

/* tslint:disable no-unused-expression */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
