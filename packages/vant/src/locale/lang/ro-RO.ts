export default {
  name: 'Nume',
  tel: 'Telefon',
  save: 'Salvează',
  clear: 'Clar',
  cancel: 'Anulează',
  confirm: 'Confirmă',
  delete: 'Șterge',
  loading: 'Încărcare...',
  noCoupon: 'Fără cupoane',
  nameEmpty: 'Te rugăm să completezi numele',
  addContact: 'Adaugă contact nou',
  telInvalid: 'Număr de telefon invalid',
  vanCalendar: {
    end: 'Sfârșit',
    start: 'Început',
    title: 'Calendar',
    weekdays: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Alege maxim ${maxRange} zile`,
  },
  vanCascader: {
    select: 'Selectați',
  },
  vanPagination: {
    prev: 'Precedenta',
    next: 'Urmatoarea',
  },
  vanPullRefresh: {
    pulling: 'Trage pentru a da împrospăta...',
    loosing: 'Eliberează pentru a împrospăta...',
  },
  vanSubmitBar: {
    label: 'Total:',
  },
  vanCoupon: {
    unlimited: 'Nelimitat',
    discount: (discount: number) => `${discount * 10}% discount`,
    condition: (condition: number) => `Cel puțin ${condition}`,
  },
  vanCouponCell: {
    title: 'Cupon',
    count: (count: number) => `Ai ${count} cupoane`,
  },
  vanCouponList: {
    exchange: 'Schimbă',
    close: 'Închide',
    enable: 'Disponibil',
    disabled: 'Indisponibil',
    placeholder: 'Cod cupon',
  },
  vanAddressEdit: {
    area: 'Zonă',
    areaEmpty: 'Te rugăm sa selectezi o zona de primire',
    addressEmpty: 'Adresa nu poate fi goală',
    addressDetail: 'Adresă',
    defaultAddress: 'Setează ca adresă de pornire',
  },
  vanAddressList: {
    add: 'Adaugă adresă nouă',
  },
};
