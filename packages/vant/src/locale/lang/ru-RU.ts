export default {
  name: 'Имя',
  tel: 'Телефон',
  save: 'Сохранить',
  confirm: 'Подтвердить',
  cancel: 'Отмена',
  delete: 'Удалить',
  loading: 'Загрузка...',
  noCoupon: 'Нет купонов',
  nameEmpty: 'Пожалуйста укажите имя',
  telInvalid: 'Некорректный номер телефона',
  vanCalendar: {
    end: 'Конец',
    start: 'Начало',
    title: 'Каленарь',
    startEnd: 'Начало/Конец',
    weekdays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Укажите более ${maxRange} дней`,
  },
  vanCascader: {
    select: 'Выбрать',
  },
  vanContactCard: {
    addText: 'Добавить информацию',
  },
  vanContactList: {
    addText: 'Создать контакт',
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
    label: 'Всего：',
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
    postal: 'Индекс',
    areaEmpty: 'Укажите зону доставки',
    addressEmpty: 'Адрес не может быть пустым',
    postalEmpty: 'Некорректный индекс',
    defaultAddress: 'Сделать адресом по умолчанию',
  },
  vanAddressEditDetail: {
    label: 'Адрес',
    placeholder: 'Адрес',
  },
  vanAddressList: {
    add: 'Новый адрес',
  },
};
