export default {
  name: 'Nume',
  tel: 'Telefon',
  save: 'Salvează',
  clear: 'Șterge',
  undo: 'Anulează',
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
    next: 'Următoarea',
  },
  vanPullRefresh: {
    pulling: 'Trage pentru a reîmprospăta...',
    loosing: 'Eliberează pentru a reîmprospăta...',
  },
  vanSubmitBar: {
    label: 'Total:',
  },
  vanCoupon: {
    unlimited: 'Nelimitat',
    discount: (discount: number) => `${discount * 10}% reducere`,
    condition: (condition: number) => `Cel puțin ${condition}`,
  },
  vanCouponCell: {
    title: 'Cupon',
    count: (count: number) => {
      if (count === 1) {
        return 'Ai 1 cupon';
      }
      const rest = count % 100;
      return count < 20 || (rest > 0 && rest < 20)
        ? `Ai ${count} cupoane`
        : `Ai ${count} de cupoane`;
    },
  },
  vanCouponList: {
    exchange: 'Aplică',
    close: 'Închide',
    enable: 'Disponibil',
    disabled: 'Indisponibil',
    placeholder: 'Cod cupon',
  },
  vanAddressEdit: {
    area: 'Zonă',
    areaEmpty: 'Te rugăm să selectezi o zonă de livrare',
    addressEmpty: 'Adresa nu poate fi goală',
    addressDetail: 'Adresă',
    defaultAddress: 'Setează ca adresă implicită',
  },
  vanAddressList: {
    add: 'Adaugă adresă nouă',
  },
};
