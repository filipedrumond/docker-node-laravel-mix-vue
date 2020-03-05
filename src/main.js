import Vue from 'vue'
import router from './routes';
import App from './vue/App';

new Vue({
    el: '#vue-app',
    router,
    components: { App },
    template: '<App/>',
});