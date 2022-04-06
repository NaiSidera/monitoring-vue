<template>
  <a-layout-content class="content-wrapper">
    <a-layout class="container">
      <a-layout-content class="container-content"><slot></slot></a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
export default {};
</script>

<style scoped>
.content-wrapper {
  padding: 50px 50px;
}
.container {
  padding: 24px 0;
  background: #fff;
}
.container-content {
  padding: 0 24px;
  min-height: 280px;
}
</style>