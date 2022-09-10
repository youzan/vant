export default {
  name: "Ім'я",
  tel: 'Телефон',
  save: 'Зберегти',
  confirm: 'підтвердити',
  cancel: 'Скасувати',
  delete: 'Видалити',
  loading: 'Завантаження...',
  noCoupon: 'Без купонів',
  nameEmpty: "Будь ласка, введіть ім'я",
  addContact: 'Додати контакт',
  telInvalid: 'Неправильний номер телефону',
  vanCalendar: {
    end: 'Кінець',
    start: 'Почати',
    title: 'Календар',
    weekdays: [
      'неділя',
      'понеділок',
      'вівторок',
      'середа',
      'четвер',
      "п'ятниця",
      'субота',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) =>
      `Виберіть не більше ніж ${maxRange} днів`,
  },
  vanCascader: {
    select: 'Вибрати',
  },
  vanPagination: {
    prev: 'Попередній',
    next: 'Далі',
  },
  vanPullRefresh: {
    pulling: 'Потягніть, щоб оновити...',
    loosing: 'Погано оновити...',
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
    placeholder: 'Код купона',
  },
  vanAddressEdit: {
    area: 'Область',
    areaEmpty: 'Будь ласка, виберіть зону прийому',
    addressEmpty: 'Адреса не може бути порожньою',
    addressDetail: 'Адреса',
    defaultAddress: 'Встановити як адресу за замовчуванням',
  },
  vanAddressList: {
    add: 'Додати нову адресу',
  },
};
