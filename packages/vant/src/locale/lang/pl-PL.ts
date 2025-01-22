export default {
  name: 'Nazwisko',
  tel: 'Telefon',
  save: 'Zapisz',
  clear: 'Wyczyść',
  cancel: 'Anuluj',
  confirm: 'Potwierdź',
  delete: 'Usuń',
  loading: 'Ładowanie...',
  noCoupon: 'Brak kuponów',
  nameEmpty: 'Wprowadź nazwisko',
  addContact: 'Dodaj kontakt',
  telInvalid: 'Nieprawidłowy numer telefonu',
  vanCalendar: {
    end: 'Koniec',
    start: 'Start',
    title: 'Kalendarz',
    weekdays: ['Nie', 'Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Wybierz nie więcej niż ${maxRange} dni`,
  },
  vanCascader: {
    select: 'Wybierz',
  },
  vanPagination: {
    prev: 'Poprzednia',
    next: 'Następna',
  },
  vanPullRefresh: {
    pulling: 'Pociągnij aby odświeżyć...',
    loosing: 'Puść aby odświeżyć...',
  },
  vanSubmitBar: {
    label: 'Suma:',
  },
  vanCoupon: {
    unlimited: 'Unlimited',
    discount: (discount: number) => `${discount * 10}% zniżki`,
    condition: (condition: number) => `Przynajmniej ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupon',
    count: (count: number) => `Aktywnych kuponów: ${count}`,
  },
  vanCouponList: {
    exchange: 'Użyj',
    close: 'Zamknij',
    enable: 'Dostępne',
    disabled: 'Niedostępne',
    placeholder: 'Kod kuponu',
  },
  vanAddressEdit: {
    area: 'Obszar',
    areaEmpty: 'Wybierz obszar',
    addressEmpty: 'Adres nie może być pusty',
    addressDetail: 'Adres',
    defaultAddress: 'Ustaw jako domyślny adres',
  },
  vanAddressList: {
    add: 'Dodaj nowy adres',
  },
};
