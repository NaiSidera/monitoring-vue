<template>
  <a-table :columns="columns" :data-source="data">
    <a-table
      slot="expandedRowRender"
      slot-scope="{ key, related_task, stage }"
      :columns="innerColumns"
      :data-source="[{ key, related_task, stage }]"
      :pagination="false"
    >
    </a-table>
  </a-table>
</template>

<script>
import { columns, innerColumns } from './columns'; // описание колонок
import data from './mock'; // тестовые данные

export default {
  data() {
    return {
      data,
      columns,
      innerColumns,
    };
  },
};
</script>

<style scoped>
</style>