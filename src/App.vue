<template>
  <div id="app">
    <template-wrapper><router-view></router-view></template-wrapper>
  </div>
</template>

<script>
import TemplateWrapper from './components/TemplateWrapper.vue';

export default {
  name: 'App',
  components: {
    TemplateWrapper,
  },
};
</script>

<style>
</style>
