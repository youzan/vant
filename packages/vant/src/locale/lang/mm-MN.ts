export default {
  name: 'Нэр',
  tel: 'Утас',
  save: 'Хадгалах',
  clear: 'Тодорхой',
  cancel: 'Цуцлах',
  confirm: 'Баталгаажуулах',
  delete: 'Устгах',
  loading: 'Ачааж байна...',
  noCoupon: 'Купон байхгүй',
  nameEmpaty: 'Нэрээ оруулна уу',
  addContact: 'Харилцагч нэмэх',
  telInvalid: 'Газар утасны дугаар',
  vanCalendar: {
    end: 'Төгсгөл',
    start: 'Эхлэх',
    title: 'Хуанли',
    weekdays: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `${maxRange} хоногоос илүүгүй сонгох`,
  },
  vanCascader: {
    select: 'Сонгох',
  },
  vanPagination: {
    prev: 'Өмнөх',
    next: 'Дараагийн',
  },
  vanPullRefresh: {
    pulling: 'Сэргээхийн тулд татах...',
    loosing: 'Сэргээхийн тулд сул...',
  },
  vanSubmitBar: {
    label: 'Нийт:',
  },
  vanCoupon: {
    unlimited: 'Хязгааргүй',
    discount: (discount: number) => `${discount * 10}% хямдрал`,
    condition: (condition: number) => `Хамгийн багадаа ${condition}`,
  },
  vanCouponCell: {
    title: 'Купон',
    count: (count: number) => `Танд ${count} купон байна`,
  },
  vanCouponList: {
    exchange: 'солилцоо',
    close: 'хаах',
    enable: 'Боломжтой',
    disabled: 'Боломжгүй',
    placeholder: 'Купон код',
  },
  vanAddressEdit: {
    area: 'Талбай',
    areaEmpty: 'Хүлээн авах бүсээ сонгоно уу',
    addressEmpty: 'Хаяг хоосон байж болохгүй',
    addressDetail: 'Хаяг',
    defaultAddress: 'Өгөгдмөл хаягаар тохируулах',
  },
  vanAddressList: {
    add: 'Шинэ хаяг нэмэх',
  },
};
