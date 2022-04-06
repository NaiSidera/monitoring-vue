<template>
  <table-wrapper>
    <div class="adapter-info-wrapper">
      <p>Последнее обновление: <a-tag :color="grey">22:34, 31.03.2022</a-tag></p>
    </div>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/TableWrapper.vue';
export default {
  components: {
    TableWrapper,
  },
};
</script>

<style scoped>
.adapter-info-wrapper {
  display: flex;
  flex-direction: column;
}
</style>