export default {
  name: 'Аты',
  tel: 'Телефон',
  save: 'Сақтау',
  clear: 'Тазарту',
  cancel: 'Бастарту',
  confirm: 'Растау',
  delete: 'Жою',
  loading: 'Жүктелуде...',
  noCoupon: 'Купондар жоқ',
  nameEmpty: 'Аты-жөніңізді толтырыңыз',
  addContact: 'Контакті қосу',
  telInvalid: 'Дұрыс телефон нөмірін толтырыңыз',
  vanCalendar: {
    end: 'Аяқталу уақыты',
    start: 'Бастау уақыты',
    title: 'Күнді таңдау',
    weekdays: ['ЖС', 'ДС', 'СС', 'СР', 'БС', 'ЖМ', 'СБ'],
    monthTitle: (year: number, month: number) => {
      const monthNames = [
        'Қаңтар',
        'Ақпан',
        'Наурыз',
        'Сәуір',
        'Мамыр',
        'Маусым',
        'Шілде',
        'Тамыз',
        'Қыркүйек',
        'Қазан',
        'Қараша',
        'Желтоқсан',
      ];

      return `${year} ${monthNames[month - 1]}`;
    },
    rangePrompt: (maxRange: number) =>
      `Тек ${maxRange} күнге дейін таңдай аласыз`,
  },
  vanCascader: {
    select: 'Таңдаңыз',
  },
  vanPagination: {
    prev: 'Артқа',
    next: 'Алға',
  },
  vanPullRefresh: {
    pulling: 'Жаңарту үшін тартыңыз...',
    loosing: 'Жаңарту үшін жіберіңіз...',
  },
  vanSubmitBar: {
    label: 'Жалпы:',
  },
  vanCoupon: {
    unlimited: 'Талап жоқ',
    discount: (discount: number) => `${discount * 10}% жеңілдік`,
    condition: (condition: number) =>
      `${condition} теңгеге жеткенде қол жетімді`,
  },
  vanCouponCell: {
    title: 'Купон',
    count: (count: number) => `${count} қол жетімді купон`,
  },
  vanCouponList: {
    exchange: 'Айырбастау',
    close: 'Қолданбау',
    enable: 'Қол жетімді',
    disabled: 'Қолжетімсіз',
    placeholder: 'Жеңілдік кодын енгізіңіз',
  },
  vanAddressEdit: {
    area: 'Аумақ',
    areaEmpty: 'Аймақты таңдаңыз',
    addressEmpty: 'Толық мекен-жайды толтырыңыз',
    addressDetail: 'Мекенжай',
    defaultAddress: 'Әдепкі жеткізу мекенжайы ретінде орнату',
  },
  vanAddressList: {
    add: 'Мекенжай қосу',
  },
};
