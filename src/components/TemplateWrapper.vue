<template>
  <a-layout id="layout">
    <a-layout-header
      ><img id="navbar-logo" src="../assets/logo.webp" /><a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="[this.$route.path]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item v-for="route in routes" :key="route.path"
          ><router-link :to="route.path">{{ route.name }}</router-link></a-menu-item
        >
      </a-menu>
      <a-select
        id="api-selector"
        placeholder="Выберите базу данных"
        :default-value="activeApi"
        style="width: 260px"
        @change="handleChangeApi"
        :options="apiOptions"
      >
      </a-select
    ></a-layout-header>
    <section id="content"><slot></slot></section>
    <a-layout-footer id="footer">SAP Supervisor ©2022 <em>Created by Modis</em></a-layout-footer>
  </a-layout>
</template>

<script>
import { routes } from '@/router.js';
import apiHosts, { apiHostStorageKey as storageKey } from '@/config/apiHosts';

export default {
  data() {
    return {
      routes,
      apiOptions: apiHosts.map((item) => ({ key: item.value, title: item.name })),
      activeApi: localStorage.getItem(storageKey),
    };
  },
  methods: {
    handleChangeApi: (value) => {
      localStorage.setItem(storageKey, value);
    },
  },
};
</script>

<style scoped>
#layout {
  height: 100vh;
}
#navbar-logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 1rem 64px 1rem 0;
}
#api-selector {
  position: absolute;
  top: 16px;
  right: 32px;
}
#content {
  flex-basis: 100%;
}
#footer {
  text-align: center;
  justify-self: flex-end;
}
</style>
