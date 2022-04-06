<template>
  <table-wrapper>
    <devices-table></devices-table>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/TableWrapper.vue';
import DevicesTable from './DevicesTable.vue';

export default {
  components: {
    TableWrapper,
    DevicesTable,
  },
  data() {
    return {
      onlineStatus: 'all',
    };
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