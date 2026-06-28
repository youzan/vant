export default {
  name: 'Namn',
  tel: 'Telefon',
  save: 'Lagre',
  clear: 'Tøm',
  undo: 'Angre',
  cancel: 'Avbryt',
  confirm: 'Stadfest',
  delete: 'Slett',
  loading: 'Lastar...',
  noCoupon: 'Ingen kupongar',
  nameEmpty: 'Fyll inn namn',
  addContact: 'Legg til ny kontakt',
  telInvalid: 'Ugyldig telefonnummer',
  vanCalendar: {
    end: 'Slutt',
    start: 'Start',
    title: 'Kalender',
    weekdays: ['Sun', 'Mån', 'Tys', 'Ons', 'Tor', 'Fre', 'Lau'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Maks. ${maxRange} dagar`,
  },
  vanCascader: {
    select: 'Vel',
  },
  vanPagination: {
    prev: 'Førre',
    next: 'Neste',
  },
  vanPullRefresh: {
    pulling: 'Dra for å oppdatere...',
    loosing: 'Slepp for å oppdatere...',
  },
  vanSubmitBar: {
    label: 'Totalt:',
  },
  vanCoupon: {
    unlimited: 'Ubegrensa',
    discount: (discount: number) => `${discount * 10}% avslag`,
    condition: (condition: number) => `Minst ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupong',
    count: (count: number) => `Du har ${count} kupongar`,
  },
  vanCouponList: {
    exchange: 'Byt',
    close: 'Lukk',
    enable: 'Tilgjengeleg',
    disabled: 'Utilgjengeleg',
    placeholder: 'Kupongkode',
  },
  vanAddressEdit: {
    area: 'Område',
    areaEmpty: 'Vel område',
    addressEmpty: 'Adressa kan ikkje vere tom',
    addressDetail: 'Adresse',
    defaultAddress: 'Set som standardadresse',
  },
  vanAddressList: {
    add: 'Legg til ny adresse',
  },
};
