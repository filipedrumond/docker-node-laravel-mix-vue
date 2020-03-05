import Vue from 'vue'
import router from './router';
import App from './vue/App';

new Vue({
    el: '#vue-app',
    router,
    components: { App },
    template: '<App/>',
});