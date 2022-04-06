import { o } from 'odata';
import endpoints from './endpoints.json';

import apiHosts, { apiHostStorageKey } from './apiHosts';

if (!localStorage.getItem(apiHostStorageKey)) {
  localStorage.setItem(apiHostStorageKey, apiHosts[0].value);
}

const api = new Proxy(endpoints, {
  get: (api, endpoint) => {
    if (!api[endpoint]) console.error('Invariant: invalid url');

    return o(localStorage.getItem(apiHostStorageKey) + api[endpoint]);
  },
});

export { api };
