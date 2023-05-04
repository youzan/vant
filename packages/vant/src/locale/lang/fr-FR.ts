export default {
  name: 'Nom',
  tel: 'Telephone',
  save: 'Sauvegarder',
  clear: 'Clair',
  cancel: 'Annuler',
  confirm: 'Confirmer',
  delete: 'Suprimer',
  loading: 'Chargement...',
  noCoupon: 'Pas de coupons',
  nameEmpty: 'Veuillez remplir le nom',
  addContact: 'Ajouter contact',
  telInvalid: 'Numéro de téléphone incorrect',
  vanCalendar: {
    end: 'Fin',
    start: 'Début',
    title: 'Calendrier',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choisir pas plus de ${maxRange} jours`,
  },
  vanCascader: {
    select: 'Sélectionner',
  },
  vanPagination: {
    prev: 'Précédent',
    next: 'Suivant',
  },
  vanPullRefresh: {
    pulling: 'Tirer pour actualiser ...',
    loosing: 'Relâchez pour actualiser...',
  },
  vanSubmitBar: {
    label: 'Total:',
  },
  vanCoupon: {
    unlimited: 'Illimité',
    discount: (discount: number) => `${discount * 10}% de réduction`,
    condition: (condition: number) => `Au moins ${condition}`,
  },
  vanCouponCell: {
    title: 'Coupon',
    count: (count: number) => `Vous avez ${count} coupons`,
  },
  vanCouponList: {
    exchange: 'Exchange',
    close: 'Fermer',
    enable: 'Disponible',
    disabled: 'Indisponible',
    placeholder: 'Code coupon',
  },
  vanAddressEdit: {
    area: 'Zone',
    areaEmpty: 'Veuillez sélectionner une zone de réception',
    addressEmpty: "L'adresse ne peut pas être vide",
    addressDetail: 'Adresse',
    defaultAddress: 'Définir comme adresse par défaut',
  },
  vanAddressList: {
    add: 'Ajouter une nouvelle adresse',
  },
};
