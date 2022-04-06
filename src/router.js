import Vue from 'vue';
import Router from 'vue-router';

import pages from './pages';

Vue.use(Router);

export const routes = [
  {
    name: 'Устройства',
    path: '/',
    alias: '/devices',
    component: pages.DevicesPage,
  },
  {
    name: 'Операции',
    path: '/operations',
    component: pages.OperationsPage,
  },
  {
    name: 'Адаптер (сервер)',
    path: '/adapter',
    component: pages.AdapterServerPage,
  },
  {
    name: 'Пользователи',
    path: '/users',
    component: pages.UsersPage,
  },
];

export const router = new Router({
  mode: 'history',
  routes,
});
