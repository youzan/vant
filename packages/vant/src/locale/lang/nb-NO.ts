export default {
  name: 'Navn',
  tel: 'Telefon',
  save: 'Lagre',
  clear: 'Klar',
  cancel: 'Avbryt',
  confirm: 'Bekreft',
  delete: 'Slett',
  loading: 'Laster...',
  noCoupon: 'Ingen kuponger',
  nameEmpty: 'Vennligst fyll inn navn',
  addContact: 'Legg til ny kontakt',
  telInvalid: 'Ugyldig telefonnummer',
  vanCalendar: {
    end: 'Slutt',
    start: 'Start',
    title: 'Kalendar',
    weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Maks. ${maxRange} dager`,
  },
  vanCascader: {
    select: 'Plukke ut',
  },
  vanPagination: {
    prev: 'Forrige',
    next: 'Neste',
  },
  vanPullRefresh: {
    pulling: 'Dra for oppdatering...',
    loosing: 'Mist for oppdatering...',
  },
  vanSubmitBar: {
    label: 'Totalt:',
  },
  vanCoupon: {
    unlimited: 'Uendelig',
    discount: (discount: number) => `${discount * 10}% avslag`,
    condition: (condition: number) => `Minst ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupong',
    count: (count: number) => `Du har ${count} kuponger`,
  },
  vanCouponList: {
    exchange: 'Bytte',
    close: 'Lukk',
    enable: 'Tilgjengelig',
    disabled: 'Utilgjengelig',
    placeholder: 'Kupong kode',
  },
  vanAddressEdit: {
    area: 'Område',
    areaEmpty: 'Vennligst fyll inn område',
    addressEmpty: 'Addresse kan ikke være tomt',
    addressDetail: 'Adresse',
    defaultAddress: 'Sett som standard adresse',
  },
  vanAddressList: {
    add: 'Legg til ny adresse',
  },
};
