export default {
  name: 'navn',
  tel: 'Telefon',
  save: 'Gem',
  clear: 'Klar',
  cancel: 'Annuller',
  confirm: 'Bekræft',
  delete: 'Slet',
  loading: 'Indlæser...',
  noCoupon: 'Ingen kuponer',
  nameEmpty: 'Fyld venligst navnet',
  addContact: 'Tilføj kontakt',
  telInvalid: 'Forkert telefonnummer',
  vanCalendar: {
    end: 'Ende',
    start: 'Start',
    title: 'Kalender',
    weekdays: ['Søn', 'Man', 'tirs', 'ons', 'tors', 'Fre', 'lør'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Vælg ikke mere end ${maxRange} dage`,
  },
  vanCascader: {
    select: 'Vælg',
  },
  vanPagination: {
    prev: 'Forrige',
    next: 'Næste',
  },
  vanPullRefresh: {
    pulling: 'Træk for at opdatere...',
    loosing: 'Løs for at opdatere...',
  },
  vanSubmitBar: {
    label: 'I alt:',
  },
  vanCoupon: {
    unlimited: 'Ubegrænset',
    discount: (discount: number) => `${discount * 10}% rabat`,
    condition: (condition: number) => `Mindst ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupon',
    count: (count: number) => `Du har ${count} kuponer`,
  },
  vanCouponList: {
    exchange: 'Udveksling',
    close: 'Luk',
    enable: 'Ledig',
    disabled: 'Utilgængelig',
    placeholder: 'Kuponkode',
  },
  vanAddressEdit: {
    area: 'ArOmrådeea',
    postal: 'Post',
    areaEmpty: 'Vælg venligst et modtageområde',
    addressEmpty: 'Adressen må ikke være tom',
    postalEmpty: 'Forkert postnummer',
    addressDetail: 'Adresse',
    defaultAddress: 'Sæt som standardadresse',
  },
  vanAddressList: {
    add: 'Tilføj ny adresse',
  },
};
