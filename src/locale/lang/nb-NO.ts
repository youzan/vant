export default {
    name: 'Navn',
    tel: 'Telefon',
    save: 'Lagre',
    confirm: 'Bekreft',
    cancel: 'Avbryt',
    delete: 'Slett',
    complete: 'Fullfør',
    loading: 'Laster...',
    telEmpty: 'Vennligst fyll inn telefonnummer',
    nameEmpty: 'Vennligst fyll inn navn',
    nameInvalid: 'Ugyldig navn',
    confirmDelete: 'Er du sikker på at du vil slette?',
    telInvalid: 'Ugyldig telefonnummer',
    vanCalendar: {
      end: 'Slutt',
      start: 'Start',
      title: 'Kalendar',
      startEnd: 'Start/Slutt',
      weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
      monthTitle: (year: number, month: number) => `${year}/${month}`,
      rangePrompt: (maxRange: number) => `Maks. ${maxRange} dager`,
    },
    vanContactCard: {
      addText: 'Legg til kontakt info',
    },
    vanContactList: {
      addText: 'Legg til ny kontakt',
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
      label: 'Totalt：',
    },
    vanCoupon: {
      unlimited: 'Uendelig',
      discount: (discount: number) => `${discount * 10}% avslag`,
      condition: (condition: number) => `Minst ${condition}`,
    },
    vanCouponCell: {
      title: 'Kupong',
      tips: 'Ingen kuponger',
      count: (count: number) => `Du har ${count} kuponger`,
    },
    vanCouponList: {
      empty: 'Ingen kuponger',
      exchange: 'Bytte',
      close: 'Lukk',
      enable: 'Tilgjengelig',
      disabled: 'Utilgjengelig',
      placeholder: 'Kupong kode',
    },
    vanAddressEdit: {
      area: 'Område',
      postal: 'Postkode',
      areaEmpty: 'Vennligst fyll inn område',
      addressEmpty: 'Addresse kan ikke være tomt',
      postalEmpty: 'Feil postkode',
      defaultAddress: 'Sett som standard adresse',
      telPlaceholder: 'Telefon',
      namePlaceholder: 'Navn',
      areaPlaceholder: 'Område',
    },
    vanAddressEditDetail: {
      label: 'Adresse',
      placeholder: 'Adresse',
    },
    vanAddressList: {
      add: 'Legg til ny adresse',
    },
  };
  
