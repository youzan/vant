export default {
  name: 'Namn',
  tel: 'Telefon',
  save: 'Spara',
  clear: 'Klar',
  cancel: 'Avbryt',
  confirm: 'Bekräfta',
  delete: 'Radera',
  loading: 'Laddar...',
  noCoupon: 'Inga kuponger',
  nameEmpty: 'Vänligen fyll i namnet',
  addContact: 'Lägg till kontakt',
  telInvalid: 'Felformat telefonnummer',
  vanCalendar: {
    end: 'Slut',
    start: 'Start',
    title: 'Kalender',
    weekdays: ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Välj högst ${maxRange} dagar`,
  },
  vanCascader: {
    select: 'Välj',
  },
  vanPagination: {
    prev: 'Föregående',
    next: 'Nästa',
  },
  vanPullRefresh: {
    pulling: 'Dra för att uppdatera...',
    loosing: 'Lös för att uppdatera...',
  },
  vanSubmitBar: {
    label: 'Totalt:',
  },
  vanCoupon: {
    unlimited: 'Obegränsat',
    discount: (discount: number) => `${discount * 10}% rabatt`,
    condition: (condition: number) => `Minst ${condition}`,
  },
  vanCouponCell: {
    title: 'Kupong',
    count: (count: number) => `Du har ${count} kuponger`,
  },
  vanCouponList: {
    exchange: 'Utbyta',
    close: 'Stäng',
    enable: 'Tillgängliga',
    disabled: 'Inte tillgänglig',
    placeholder: 'Kupongkod',
  },
  vanAddressEdit: {
    area: 'Område',
    areaEmpty: 'Välj ett mottagningsområde',
    addressEmpty: 'Adressen får inte vara tom',
    addressDetail: 'Adress',
    defaultAddress: 'Ange som standardadress',
  },
  vanAddressList: {
    add: 'Lägg till ny adress',
  },
};
