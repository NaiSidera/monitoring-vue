import Vue from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';
import 'normalize.css';
import 'ant-design-vue/dist/antd.min.css';

import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';

import Router from 'vue-router';
import { router } from './router';

Sentry.init({
  Vue,
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0', // добавить эндпойнт для приёма данных от клиента sentry
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', '192.168.8.98:8015', /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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
