export default {
  name: "Ім'я",
  tel: 'Телефон',
  save: 'Зберегти',
  clear: 'ясно',
  cancel: 'Скасувати',
  confirm: 'Підтвердити',
  delete: 'Видалити',
  loading: 'Завантаження...',
  noCoupon: 'Без купонів',
  nameEmpty: "Будь ласка, введіть ім'я",
  addContact: 'Додати контакт',
  telInvalid: 'Неправильний номер телефону',
  vanCalendar: {
    end: 'Кінець',
    start: 'Початок',
    title: 'Календар',
    weekdays: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Оберіть не більше ніж ${maxRange} днів`,
  },
  vanCascader: {
    select: 'Обрати',
  },
  vanPagination: {
    prev: 'Повернутися',
    next: 'Далі',
  },
  vanPullRefresh: {
    pulling: 'Потягніть, щоб оновити...',
    loosing: 'Відпустіть, щоб оновити...',
  },
  vanSubmitBar: {
    label: 'Усього:',
  },
  vanCoupon: {
    unlimited: 'Необмежено',
    discount: (discount: number) => `${discount * 10}% off`,
    condition: (condition: number) => `Принаймні ${condition}`,
  },
  vanCouponCell: {
    title: 'Купон',
    count: (count: number) => `У вас є ${count} купонів`,
  },
  vanCouponList: {
    exchange: 'Обмін',
    close: 'Закрити',
    enable: 'Доступно',
    disabled: 'Недоступно',
    placeholder: 'Код купону',
  },
  vanAddressEdit: {
    area: 'Область',
    areaEmpty: 'Будь ласка, оберіть зону прийому',
    addressEmpty: 'Адреса не може бути порожньою',
    addressDetail: 'Адреса',
    defaultAddress: 'Встановити як адресу за замовчуванням',
  },
  vanAddressList: {
    add: 'Додати нову адресу',
  },
};
