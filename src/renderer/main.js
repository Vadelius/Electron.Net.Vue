import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:5000';
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
