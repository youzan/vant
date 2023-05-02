export default {
  name: 'Name',
  tel: 'Telefon',
  save: 'Speichern',
  clear: 'Klar',
  cancel: 'Abbrechen',
  confirm: 'Bestätigen',
  delete: 'Löschen',
  loading: 'Laden...',
  noCoupon: 'Keine Coupons',
  nameEmpty: 'Bitte den Name angeben',
  addContact: 'Neuen Kontakt hinzufügen',
  telInvalid: 'Ungültige Telefonnummer',
  vanCalendar: {
    end: 'Ende',
    start: 'Start',
    title: 'Kalender',
    weekdays: ['So', 'Mo', 'Di', 'Mo', 'Do', 'Fr', 'Sa'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Wähle nicht mehr als ${maxRange} Tage`,
  },
  vanCascader: {
    select: 'Wählen',
  },
  vanPagination: {
    prev: 'Vorherige',
    next: 'Nächste',
  },
  vanPullRefresh: {
    pulling: 'Zum Aktualisieren herunterziehen...',
    loosing: 'Loslassen zum Aktualisieren...',
  },
  vanSubmitBar: {
    label: 'Total:',
  },
  vanCoupon: {
    unlimited: 'Unbegrenzt',
    discount: (discount: number) => `${discount * 10}% Rabatt`,
    condition: (condition: number) => `Mindestens ${condition}`,
  },
  vanCouponCell: {
    title: 'Coupon',
    count: (count: number) => `Du hast ${count} Coupons`,
  },
  vanCouponList: {
    exchange: 'Austauschen',
    close: 'Schließen',
    enable: 'Verfügbar',
    disabled: 'Nicht verfügbar',
    placeholder: 'Couponcode',
  },
  vanAddressEdit: {
    area: 'Standort',
    areaEmpty: 'Bitte deinen Ort angeben',
    addressEmpty: 'Adresse darf nicht leer sein',
    addressDetail: 'Adresse',
    defaultAddress: 'Als Standardadresse festgelegen',
  },
  vanAddressList: {
    add: 'Neue Adresse hinzufügen',
  },
};
