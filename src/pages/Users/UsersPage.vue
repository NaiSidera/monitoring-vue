<template>
  <table-wrapper>
    <users-table></users-table>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/TableWrapper.vue';
import UsersTable from './UsersTable.vue';

export default {
  components: {
    TableWrapper,
    UsersTable,
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