export default {
  name: 'Όνομα',
  tel: 'Τηλέφωνο',
  save: 'Αποθήκευση',
  clear: 'Σαφή',
  cancel: 'Ακύρωση',
  confirm: 'Επιβεβαίωση',
  delete: 'Διαγραφή',
  loading: 'Φόρτωση...',
  noCoupon: 'Χωρίς κουπόνια',
  nameEmpty: 'Παρακαλώ συμπληρώστε το όνομα',
  addContact: 'Προσθήκη επαφής',
  telInvalid: 'Αριθμός τηλεφώνου με εσφαλμένη μορφή',
  vanCalendar: {
    end: 'Τέλος',
    start: 'Έναρξη',
    title: 'Ημερολόγιο',
    weekdays: [
      'Κυριακή',
      'Δευτέρα',
      'Τρίτη',
      'Τετάρτη',
      'Πέμπτη',
      'Παρασκευή',
      'Σάββατο',
    ],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) =>
      `Επιλέξτε όχι περισσότερες από ${maxRange} ημέρες`,
  },
  vanCascader: {
    select: 'Επιλογή',
  },
  vanPagination: {
    prev: 'Προηγούμενο',
    next: 'Επόμενο',
  },
  vanPullRefresh: {
    pulling: 'Τραβήξτε για ανανέωση...',
    loosing: 'Χαλαρά για ανανέωση...',
  },
  vanSubmitBar: {
    label: 'Σύνολο:',
  },
  vanCoupon: {
    unlimited: 'Απεριόριστο',
    discount: (discount: number) => `${discount * 10}% έκπτωση`,
    condition: (condition: number) => `Τουλάχιστον ${condition}`,
  },
  vanCouponCell: {
    title: 'Κουπόνι',
    count: (count: number) => `Έχετε ${count} κουπόνια`,
  },
  vanCouponList: {
    exchange: 'Ανταλλαγή',
    close: 'Κλείσιμο',
    enable: 'Διαθέσιμο',
    disabled: 'Μη διαθέσιμο',
    placeholder: 'Κωδικός κουπονιού',
  },
  vanAddressEdit: {
    area: 'Περιοχή',
    postal: 'Ταχυδρομείο',
    areaEmpty: 'Παρακαλώ επιλέξτε μια περιοχή λήψης',
    addressEmpty: 'Η διεύθυνση δεν μπορεί να είναι κενή',
    postalEmpty: 'Λάθος ταχυδρομικός κώδικας',
    addressDetail: 'Διεύθυνση',
    defaultAddress: 'Ορισμός ως προεπιλεγμένη διεύθυνση',
  },
  vanAddressList: {
    add: 'Προσθήκη νέας διεύθυνσης',
  },
};
