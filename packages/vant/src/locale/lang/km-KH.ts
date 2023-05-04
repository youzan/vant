export default {
  name: 'ឈ្មោះ',
  tel: 'ទូរស័ព្ទ',
  save: 'រក្សាទុក',
  clear: 'ច្បាស់',
  cancel: 'បោះបង់',
  confirm: 'យល់ព្រម',
  delete: 'លុប',
  loading: 'កំពុង​ផ្ទុក...',
  noCoupon: 'គ្មានគូប៉ុង',
  nameEmpty: 'សូមបំពេញឈ្មោះ',
  addContact: 'បន្ថែមទំនាក់ទំនង',
  telInvalid: 'លេខទូរស័ព្ទមិនត្រូវទម្រង់',
  vanCalendar: {
    end: 'បញ្ចប់',
    start: 'ចាប់ពី',
    title: 'ប្រតិទិន',
    weekdays: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'សៅ'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `ជ្រើសរើសមិនលើសពី ${maxRange} ថ្ងៃ`,
  },
  vanCascader: {
    select: 'ជ្រើសរើស',
  },
  vanPagination: {
    prev: 'មុន',
    next: 'បន្ទាប់',
  },
  vanPullRefresh: {
    pulling: 'ទាញដើម្បីចាប់ផ្តើមឡើងវិញ...',
    loosing: 'ព្រលែងដើម្បីចាប់ផ្តើមឡើងវិញ...',
  },
  vanSubmitBar: {
    label: 'សរុប:',
  },
  vanCoupon: {
    unlimited: 'គ្មានដែនកំណត់',
    discount: (discount: number) => `បញ្ចុះតម្លៃ ${discount * 10}%`,
    condition: (condition: number) => `យ៉ាងតិច ${condition}`,
  },
  vanCouponCell: {
    title: 'គូប៉ុង',
    count: (count: number) => `អ្នកមាន ${count}គូប៉ុង`,
  },
  vanCouponList: {
    exchange: 'ប្ដូរ',
    close: 'បិទ',
    enable: 'ប្រើបាន',
    disabled: 'មិនអាចប្រើបាន',
    placeholder: 'លេខកូដគូប៉ុង',
  },
  vanAddressEdit: {
    area: 'ទីតាំង',
    areaEmpty: 'សូមជ្រើសរើសទីតាំងទទួល',
    addressEmpty: 'តម្រូវអោយមានអាសយដ្ឋាន',
    addressDetail: 'អាសយដ្ឋាន',
    defaultAddress: 'ដាក់ជាអាសយដ្ឋានដើម',
  },
  vanAddressList: {
    add: 'បន្ថែមអាសយដ្ឋានថ្មី',
  },
};
