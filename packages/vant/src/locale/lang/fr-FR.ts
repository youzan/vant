export default {
  name: 'Nom',
  tel: 'Telephone',
  save: 'Sauvegarder',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  delete: 'Suprimer',
  loading: 'Chargement...',
  noCoupon: 'Pas de coupons',
  nameEmpty: 'Veuillez remplir le nom',
  telInvalid: 'Numéro de téléphone incorrect',
  vanCalendar: {
    end: 'Fin',
    start: 'Début',
    title: 'Calendrier',
    startEnd: 'Début/Fin',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choisir pas plus de ${maxRange} jours`,
  },
  vanCascader: {
    select: 'Sélectionner',
  },
  vanContactCard: {
    addText: 'Ajouter des informations de contact',
  },
  vanContactList: {
    addText: 'Ajouter un nouveau contact',
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
    label: 'Total：',
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
    postal: 'Postal',
    areaEmpty: 'Veuillez sélectionner une zone de réception',
    addressEmpty: "L'adresse ne peut pas être vide",
    postalEmpty: 'Mauvais code postal',
    defaultAddress: 'Définir comme adresse par défaut',
  },
  vanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse',
  },
  vanAddressList: {
    add: 'Ajouter une nouvelle adresse',
  },
};
