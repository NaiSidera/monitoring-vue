<template>
  <table-wrapper>
    <operations-table></operations-table>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/TableWrapper.vue';
import OperationsTable from './OperationsTable.vue';

export default {
  components: {
    TableWrapper,
    OperationsTable,
  },
};
</script>

<style scoped>
.filters-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}
</style>