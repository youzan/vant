export default {
  name: 'Имя',
  tel: 'Телефон',
  save: 'Сохранить',
  clear: 'Прозрачный',
  cancel: 'Отмена',
  confirm: 'Подтвердить',
  delete: 'Удалить',
  loading: 'Загрузка...',
  noCoupon: 'Нет купонов',
  nameEmpty: 'Пожалуйста укажите имя',
  addContact: 'Создать контакт',
  telInvalid: 'Некорректный номер телефона',
  vanCalendar: {
    end: 'Конец',
    start: 'Начало',
    title: 'Календарь',
    weekdays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Укажите более ${maxRange} дней`,
  },
  vanCascader: {
    select: 'Выбрать',
  },
  vanPagination: {
    prev: 'Назад',
    next: 'Вперед',
  },
  vanPullRefresh: {
    pulling: 'Потяните для обновления...',
    loosing: 'Отпустите для обновления...',
  },
  vanSubmitBar: {
    label: 'Всего:',
  },
  vanCoupon: {
    unlimited: 'Безлимитный',
    discount: (discount: number) => `${discount * 10}% скидка`,
    condition: (condition: number) => `Как минимум ${condition}`,
  },
  vanCouponCell: {
    title: 'Купон',
    count: (count: number) => `У вас есть ${count} купонов`,
  },
  vanCouponList: {
    exchange: 'Обмен',
    close: 'Закрыть',
    enable: 'Доступно',
    disabled: 'Недоступно',
    placeholder: 'Код купона',
  },
  vanAddressEdit: {
    area: 'Область',
    areaEmpty: 'Укажите зону доставки',
    addressEmpty: 'Адрес не может быть пустым',
    addressDetail: 'Адрес',
    defaultAddress: 'Сделать адресом по умолчанию',
  },
  vanAddressList: {
    add: 'Новый адрес',
  },
};
