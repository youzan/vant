export default {
  name: 'שם',
  tel: 'טלפון',
  save: 'שמור',
  clear: 'ברור',
  cancel: 'ביטול',
  confirm: 'אישור',
  delete: 'מחיקה',
  loading: 'טוען...',
  noCoupon: 'אין קופונים',
  nameEmpty: 'אנא מלא את השדה',
  addContact: 'הוסף איש-קשר',
  telInvalid: 'מספר טלפון שגוי',
  vanCalendar: {
    end: 'סוף',
    start: 'התחלה',
    title: 'לוח שנה',
    weekdays: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => ` בחר לא יותר מ ${maxRange} ימים `,
  },
  vanCascader: {
    select: 'בחר',
  },
  vanPagination: {
    prev: 'הקודם',
    next: 'הבא',
  },
  vanPullRefresh: {
    pulling: 'גרור כדי לרענן',
    loosing: 'שחרר כדי לרענן',
  },
  vanSubmitBar: {
    label: 'סך הכל:',
  },
  vanCoupon: {
    unlimited: 'ללא הגבלה',
    discount: (discount: number) => `${discount * 10}% הנחה`,
    condition: (condition: number) => ` לפחות ${condition}`,
  },
  vanCouponCell: {
    title: 'קופון',
    count: (count: number) => ` יש לך ${count} קופונים `,
  },
  vanCouponList: {
    exchange: 'החלפה',
    close: 'סגירה',
    enable: 'זמינים',
    disabled: 'לא זמינים',
    placeholder: 'קוד קופון',
  },
  vanAddressEdit: {
    area: 'איזור',
    postal: 'מיקוד',
    areaEmpty: 'אנא בחר איזור קבלה',
    addressEmpty: 'יש למלא כתובת',
    postalEmpty: 'טעות במיקוד',
    addressDetail: 'כתובת',
    defaultAddress: 'הגדר ככתובת ברירת מחדש',
  },
  vanAddressList: {
    add: 'הוספת כתובת חדשה',
  },
};
