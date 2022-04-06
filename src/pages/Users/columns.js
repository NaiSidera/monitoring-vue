// Описание колонок таблицы
export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Должность',
    dataIndex: 'job',
    key: 'job',
    filters: [
      {
        text: 'Менеджер',
        value: 'Менеджер',
      },
      {
        text: 'Кладовщик',
        value: 'Кладовщик',
      },
    ],
    onFilter: (value, record) => record.job.indexOf(value) === 0,
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
        text: 'Сканирование',
        value: 'Сканирование',
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
    title: 'Последнее устройство',
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
    title: 'Последняя операция',
    dataIndex: 'last_operation',
    key: 'last_operation',
    // Для фильтрации по заданным значениям
    filters: [
      {
        text: 'Сканирование',
        value: 'Сканирование',
      },
      {
        text: 'Перемещение на склад',
        value: 'Перемещение на склад',
      },
    ],
    // Функция, описывающая фильтрацию. record - объект в массиве данных
    onFilter: (value, record) => record.last_operation.indexOf(value) === 0,
  },
  {
    title: 'Был в сети',
    dataIndex: 'last_seen',
    key: 'last_seen',
  },
];
