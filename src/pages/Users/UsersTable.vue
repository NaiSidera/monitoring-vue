<template>
  <a-table :columns="columns" :data-source="data">
    <!-- Кастомный рендер при помощи scopedSlots, описанного в массиве колонок -->
    <span slot="status" slot-scope="status">
      <a-badge :status="status === 'Online' ? 'success' : 'error'" /> {{ status }}
    </span>
    <span slot="device_type" slot-scope="device_type"
      ><img
        v-if="device_type.toLowerCase() === 'ios'"
        src="../../assets/ios.jpg"
        style="width: 20px; height: 20px"
      /><img
        v-if="device_type.toLowerCase() === 'android'"
        src="../../assets/android.jpg"
        style="width: 20px; height: 20px"
      />
      <span v-if="device_type.toLowerCase() === 'tsd'">ТСД</span>
    </span>
    <!-- Вложенная таблица. Значение slot - из документации, innerColumns - в data компонента -->
    <a-table
      slot="expandedRowRender"
      slot-scope="{ key, last_operation, last_seen }"
      :columns="innerColumns"
      :data-source="[{ key, last_operation, last_seen }]"
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