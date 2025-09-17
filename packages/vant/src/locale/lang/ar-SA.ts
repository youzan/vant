export default {
  name: 'الاسم',
  tel: 'الهاتف',
  save: 'حفظ',
  clear: 'مسح',
  cancel: 'إلغاء',
  confirm: 'تأكيد',
  delete: 'حذف',
  loading: 'جار التحميل...',
  noCoupon: 'لا يوجد كوبونات',
  nameEmpty: 'يرجى ملء الاسم',
  addContact: 'إضافة جهة اتصال',
  telInvalid: 'رقم الهاتف غير صحيح',
  vanCalendar: {
    end: 'نهاية',
    start: 'بداية',
    title: 'التقويم',
    weekdays: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `اختر لا يزيد عن ${maxRange} أيام`
  },
  vanCascader: {
    select: 'اختر',
  },
  vanPagination: {
    prev: 'السابق',
    next: 'التالي',
  },
  vanPullRefresh: {
    pulling: 'اسحب للتحديث...',
    loosing: 'أفلت للتحديث...',
  },
  vanSubmitBar: {
    label: 'المجموع:',
  },
  vanCoupon: {
    unlimited: 'غير محدود',
    discount: (discount: number) => `${discount * 10}% خصم`,
    condition: (condition: number) => `على الأقل ${condition}`,
  },
  vanCouponCell: {
    title: 'كوبون',
    count: (count: number) => `لديك ${count} كوبونات`,
  },
  vanCouponList: {
    exchange: 'استبدال',
    close: 'إغلاق',
    enable: 'متاح',
    disabled: 'غير متاح',
    placeholder: 'كود الكوبون',
  },
  vanAddressEdit: {
    area: 'المنطقة',
    areaEmpty: 'يرجى اختيار منطقة استقبال',
    addressEmpty: 'العنوان لا يمكن أن يكون فارغًا',
    addressDetail: 'العنوان',
    defaultAddress: 'تعيين كعنوان افتراضي',
  },
  vanAddressList: {
    add: 'إضافة عنوان جديد',
  },
};