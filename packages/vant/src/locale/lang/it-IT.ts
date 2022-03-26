export default {
  name: 'Nome',
  tel: 'Telefono',
  save: 'Salva',
  confirm: 'Conferma',
  cancel: 'Annulla',
  delete: 'Elimina',
  loading: 'Caricamento in corso...',
  noCoupon: 'Nessun coupon',
  nameEmpty: 'Inserisci il nome',
  addContact: 'Aggiungi contatto',
  telInvalid: 'Numero di telefono errato',
  vanCalendar: {
    end: 'Fine',
    start: 'Inizio',
    title: 'Calendario',
    weekdays: [
      'domenica',
      'Lunedi',
      'Martedì',
      'mercoledì',
      'giovedì',
      'venerdì',
      'Sabato',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Scegli non più di ${maxRange} giorni`,
  },
  vanCascader: {
    select: 'Seleziona',
  },
  vanPagination: {
    prev: 'Precedente',
    next: 'Avanti',
  },
  vanPullRefresh: {
    pulling: 'Tiri per aggiornare...',
    loosing: 'Largo per rinfrescare...',
  },
  vanSubmitBar: {
    label: 'Totale:',
  },
  vanCoupon: {
    unlimited: 'Illimitato',
    discount: (discount: number) => `${discount * 10}% di sconto`,
    condition: (condition: number) => `Almeno ${condition}`,
  },
  vanCouponCell: {
    title: 'Buono',
    count: (count: number) => `Hai ${count} coupon`,
  },
  vanCouponList: {
    exchange: 'Scambio',
    close: 'Chiudi',
    enable: 'Disponibile',
    disabled: 'Non disponibile',
    placeholder: 'Codice coupon',
  },
  vanAddressEdit: {
    area: 'Area',
    areaEmpty: "Seleziona un'area di ricezione",
    addressEmpty: "L'indirizzo non può essere vuoto",
    addressDetail: 'Indirizzo',
    defaultAddress: 'Imposta come indirizzo predefinito',
  },
  vanAddressList: {
    add: 'Aggiungi nuovo indirizzo',
  },
};
