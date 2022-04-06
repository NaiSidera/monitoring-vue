const apiHostsConfig = [
  {
    name: 'Production (pdt.modis.ru)',
    value: 'https://pdt.modis.ru/tsd_services/tsd_data',
  },
  {
    name: 'Test PQ1 (sap-pq1)',
    value: 'http://dc-sap-pq1.domain.local:8015/tsd_services/tsd_data',
  },
];

export const apiHostStorageKey = '__API_URL__';
export default apiHostsConfig;
