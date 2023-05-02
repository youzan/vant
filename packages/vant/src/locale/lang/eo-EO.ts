export default {
  name: 'Nomo',
  tel: 'Telefonnumero',
  save: 'Konservi',
  clear: 'Klara',
  cancel: 'Rezigni',
  confirm: 'Konfirmi',
  delete: 'Forigi',
  loading: 'Bonvolu atendi...',
  noCoupon: 'Neniu kupono',
  nameEmpty: 'Plenigu la nomon',
  addContact: 'Aldoni kontakton',
  telInvalid: 'Nevalida telefonnumero',
  vanCalendar: {
    end: 'Fino',
    start: 'Komenco',
    title: 'Kalendaro',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Ĵaŭ', 'Ven', 'Sab'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Elektu maksimume ${maxRange} tagojn`,
  },
  vanCascader: {
    select: 'Elekti',
  },
  vanPagination: {
    prev: 'Antaŭa',
    next: 'Sekva',
  },
  vanPullRefresh: {
    pulling: 'Tiri por refreŝigi...',
    loosing: 'Lasi por refreŝigi...',
  },
  vanSubmitBar: {
    label: 'Sumo:',
  },
  vanCoupon: {
    unlimited: 'Senlima',
    discount: (discount: number) => `${discount * 10}%-a rabato`,
    condition: (condition: number) => `Minimume ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupono',
    count: (count: number) => `Vi havas ${count} kuponojn`,
  },
  vanCouponList: {
    exchange: 'Interŝanĝi',
    close: 'Fermi',
    enable: 'Disponebla',
    disabled: 'Nedisponebla',
    placeholder: 'Kupon-kodo',
  },
  vanAddressEdit: {
    area: 'Areo',
    areaEmpty: 'Elektu ricevan areon',
    addressEmpty: 'La adreso ne povas esti malplena',
    addressDetail: 'Adreso',
    defaultAddress: 'Agordi kiel defaŭltan adreson',
  },
  vanAddressList: {
    add: 'Aldoni novan adreson',
  },
};
