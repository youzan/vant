export default {
  name: 'নাম',
  tel: 'ফোন',
  save: 'সংরক্ষণ করুন',
  clear: 'পরিষ্কার',
  cancel: 'বাতিল',
  confirm: 'নিশ্চিত করুন',
  delete: 'মুছুন',
  loading: 'লোড হচ্ছে...',
  noCoupon: 'কোন কুপন নেই',
  nameEmpty: 'অনুগ্রহ করে নামটি পূরণ করুন',
  addContact: 'যোগাযোগ যোগ করুন',
  telInvalid: 'বিকৃত ফোন নম্বর',
  vanCalendar: {
    end: 'শেষ',
    start: 'শুরু',
    title: 'ক্যালেন্ডার',
    weekdays: [
      'রবিবার',
      'সোমবার',
      'মঙ্গলবার',
      'বুধবার',
      'বৃহস্পতিবার',
      'শুক্রবার',
      'শনিবার',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) =>
      `${maxRange} দিনের বেশি নির্বাচন করবেন না`,
  },
  vanCascader: {
    select: 'নির্বাচন',
  },
  vanPagination: {
    prev: 'পূর্ববর্তী',
    next: 'পরবর্তী',
  },
  vanPullRefresh: {
    pulling: 'রিফ্রেশ করতে টানুন...',
    loosing: 'রিফ্রেশ করতে আলগা...',
  },
  vanSubmitBar: {
    label: 'মোট:',
  },
  vanCoupon: {
    unlimited: 'আনলিমিটেড',
    discount: (discount: number) => `${discount * 10}% ছাড়`,
    condition: (condition: number) => `অন্তত ${condition}`,
  },
  vanCouponCell: {
    title: 'কুপন',
    count: (count: number) => `আপনার ${count} কুপন আছে`,
  },
  vanCouponList: {
    exchange: 'বিনিময়',
    close: 'বন্ধ',
    enable: 'উপলভ্য',
    disabled: 'অনুপলব্ধ',
    placeholder: 'কুপন কোড',
  },
  vanAddressEdit: {
    area: 'এরিয়া',
    areaEmpty: 'অনুগ্রহ করে একটি রিসিভিং এলাকা নির্বাচন করুন',
    addressEmpty: 'ঠিকানা খালি হতে পারে না',
    addressDetail: 'ঠিকানা',
    defaultAddress: 'ডিফল্ট ঠিকানা হিসাবে সেট করুন',
  },
  vanAddressList: {
    add: 'নতুন ঠিকানা যোগ করুন',
  },
};
