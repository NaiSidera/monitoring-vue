// Описание колонок таблицы
export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Код',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    filters: [
      {
        text: 'Перемещение на склад',
        value: 'Перемещение на склад',
      },
      {
        text: 'Сканирование',
        value: 'Сканирование',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Завод (магазин)',
    dataIndex: 'store',
    key: 'store',
    sorter: (a, b) => a.last_store - b.last_store,
  },
  {
    title: 'Пользователь',
    dataIndex: 'user',
    key: 'user',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Дата начала',
    dataIndex: 'start_date',
    key: 'start_date',
    sorter: (a, b) => a.start_date - b.start_date,
  },
  {
    title: 'Дата обновления',
    dataIndex: 'update_date',
    key: 'update_date',
    sorter: (a, b) => a.update_date - b.update_date,
  },
];

export const innerColumns = [
  {
    title: 'Номер этапа',
    dataIndex: 'stage',
    key: 'stage',
  },
  {
    title: 'Связанное задание',
    dataIndex: 'related_task',
    key: 'related_task',
  },
];
