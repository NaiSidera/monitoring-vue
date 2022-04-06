import Vue from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';
import 'normalize.css';
import 'ant-design-vue/dist/antd.min.css';

import Router from 'vue-router';
import { router } from './router';

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  components: {
    Antd,
    Router,
  },
}).$mount('#app');
