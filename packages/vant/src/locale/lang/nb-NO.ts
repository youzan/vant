export default {
  name: 'Navn',
  tel: 'Telefon',
  save: 'Lagre',
  clear: 'Tøm',
  undo: 'Angre',
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
    title: 'Kalender',
    weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Maks. ${maxRange} dager`,
  },
  vanCascader: {
    select: 'Velg',
  },
  vanPagination: {
    prev: 'Forrige',
    next: 'Neste',
  },
  vanPullRefresh: {
    pulling: 'Dra for å oppdatere...',
    loosing: 'Slipp for å oppdatere...',
  },
  vanSubmitBar: {
    label: 'Totalt:',
  },
  vanCoupon: {
    unlimited: 'Ubegrenset',
    discount: (discount: number) => `${discount * 10}% avslag`,
    condition: (condition: number) => `Minst ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupong',
    count: (count: number) => `Du har ${count} kuponger`,
  },
  vanCouponList: {
    exchange: 'Bytt',
    close: 'Lukk',
    enable: 'Tilgjengelig',
    disabled: 'Utilgjengelig',
    placeholder: 'Kupongkode',
  },
  vanAddressEdit: {
    area: 'Område',
    areaEmpty: 'Vennligst velg område',
    addressEmpty: 'Adressen kan ikke være tom',
    addressDetail: 'Adresse',
    defaultAddress: 'Sett som standardadresse',
  },
  vanAddressList: {
    add: 'Legg til ny adresse',
  },
};
