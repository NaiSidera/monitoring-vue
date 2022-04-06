// Описание колонок таблицы
export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    // Сортировка. a и b - объекты в массиве, обращаемся к сравниваемым полям через точку
    sorter: (a, b) => a.status.length - b.status.length,
    scopedSlots: {
      // Для кастомного рендеринга. Возьмёт тег в template с атрибутом slot="status"
      customRender: 'status',
    },
  },
  {
    title: 'Last store',
    dataIndex: 'last_store',
    key: 'last_store',
    sorter: (a, b) => a.last_store - b.last_store,
  },
  {
    title: 'Текущая операция',
    dataIndex: 'operation_in_progress',
    key: 'operation_in_progress',
    // Для фильтрации по заданным значениям
    filters: [
      {
        text: 'Приёмка',
        value: 'Приёмка',
      },
      {
        text: 'Перемещение на склад',
        value: 'Перемещение на склад',
      },
    ],
    // Функция, описывающая фильтрацию. record - объект в массиве данных
    onFilter: (value, record) => record.operation_in_progress.indexOf(value) === 0,
  },
  {
    title: 'Тип',
    dataIndex: 'device_type',
    key: 'device_type',
    scopedSlots: {
      customRender: 'device_type',
    },
    filters: [
      {
        text: 'Android',
        value: 'android',
      },
      {
        text: 'iOs',
        value: 'ios',
      },
      {
        text: 'ТСД',
        value: 'tsd',
      },
    ],
    onFilter: (value, record) => record.device_type.indexOf(value) === 0,
  },
];

export const innerColumns = [
  {
    title: 'User ID',
    dataIndex: 'last_user_id',
    key: 'last_user_id',
  },
  {
    title: 'Был в сети',
    dataIndex: 'last_seen',
    key: 'last_seen',
  },
  {
    title: 'Версия',
    dataIndex: 'app_version',
    key: 'app_version',
  },
];
